param(
  [ValidateSet("", "start", "pull", "update", "build", "test", "status", "cursor", "github", "stop", "help")]
  [string]$Action = ""
)

$ErrorActionPreference = "Stop"
$RepoRoot = Split-Path -Parent $PSScriptRoot
$Port = 8000
$Url = "http://localhost:$Port"
$GitHubUrl = "https://github.com/Scimonesays/Universal-Frequency-Spectrum"

function Write-Title {
  Clear-Host
  Write-Host ""
  Write-Host "  UNIVERSAL FREQUENCY SPECTRUM" -ForegroundColor Cyan
  Write-Host "  Quick Launch" -ForegroundColor DarkCyan
  Write-Host "  $RepoRoot" -ForegroundColor DarkGray
  Write-Host ""
}

function Require-Command([string]$Name, [string]$Hint) {
  if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
    throw "$Name was not found. $Hint"
  }
}

function Invoke-UfsBuild {
  Require-Command "node" "Install Node.js 22+ and reopen the terminal."
  Write-Host ""
  Write-Host "Building UFS..." -ForegroundColor Cyan
  Push-Location $RepoRoot
  try {
    & node scripts/build-site.mjs
    if ($LASTEXITCODE -ne 0) { throw "UFS build failed." }
  }
  finally {
    Pop-Location
  }
  Write-Host "Build complete." -ForegroundColor Green
}

function Get-PortListener {
  try {
    return Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction Stop | Select-Object -First 1
  }
  catch {
    return $null
  }
}

function Open-UfsBrowser {
  Start-Process $Url
}

function Start-UfsSite {
  Invoke-UfsBuild

  $listener = Get-PortListener
  if ($listener) {
    Write-Host ""
    Write-Host "Port $Port is already in use. Opening $Url." -ForegroundColor Yellow
    Open-UfsBrowser
    return
  }

  $escapedRoot = $RepoRoot.Replace("'", "''")
  $command = "Set-Location -LiteralPath '$escapedRoot'; `$Host.UI.RawUI.WindowTitle = 'UFS Local Site'; node scripts/serve-site.mjs $Port"
  $encoded = [Convert]::ToBase64String([Text.Encoding]::Unicode.GetBytes($command))

  Start-Process powershell.exe -ArgumentList @(
    "-NoLogo",
    "-NoProfile",
    "-NoExit",
    "-EncodedCommand",
    $encoded
  ) | Out-Null

  Start-Sleep -Milliseconds 700
  Open-UfsBrowser
  Write-Host ""
  Write-Host "UFS is opening at $Url" -ForegroundColor Green
}

function Invoke-UfsPull {
  Require-Command "git" "Install Git for Windows and reopen the terminal."
  Push-Location $RepoRoot
  try {
    Write-Host ""
    Write-Host "Checking repository..." -ForegroundColor Cyan
    $dirty = & git status --porcelain
    if ($LASTEXITCODE -ne 0) { throw "Could not read git status." }

    if ($dirty) {
      Write-Host "Local changes detected. Nothing will be stashed or overwritten automatically." -ForegroundColor Yellow
      & git status --short
      Write-Host ""
    }

    Write-Host "Pulling main with fast-forward only..." -ForegroundColor Cyan
    & git pull --ff-only
    if ($LASTEXITCODE -ne 0) {
      throw "Git pull did not complete. Resolve the git message above; UFS did not force or overwrite anything."
    }
  }
  finally {
    Pop-Location
  }
  Write-Host "Repository is up to date." -ForegroundColor Green
}

function Invoke-UfsTest {
  Require-Command "node" "Install Node.js 22+ and reopen the terminal."
  Push-Location $RepoRoot
  try {
    Write-Host ""
    Write-Host "Running UFS validation..." -ForegroundColor Cyan

    & node --check web/app.js
    if ($LASTEXITCODE -ne 0) { throw "JavaScript syntax check failed." }

    & node scripts/build-site.mjs
    if ($LASTEXITCODE -ne 0) { throw "Build failed." }

    & node scripts/test-web-app.mjs
    if ($LASTEXITCODE -ne 0) { throw "Web audit failed." }
  }
  finally {
    Pop-Location
  }
  Write-Host "All UFS checks passed." -ForegroundColor Green
}

function Show-UfsStatus {
  Require-Command "git" "Install Git for Windows and reopen the terminal."
  Push-Location $RepoRoot
  try {
    Write-Host ""
    & git status -sb
    Write-Host ""
    & git log -1 --oneline
  }
  finally {
    Pop-Location
  }
}

function Open-UfsCursor {
  Push-Location $RepoRoot
  try {
    if (Get-Command cursor -ErrorAction SilentlyContinue) {
      Start-Process cursor -ArgumentList "."
      Write-Host "Opening UFS in Cursor..." -ForegroundColor Green
    }
    else {
      Start-Process explorer.exe $RepoRoot
      Write-Host "Cursor CLI was not found, so the repository folder was opened instead." -ForegroundColor Yellow
    }
  }
  finally {
    Pop-Location
  }
}

function Stop-UfsSite {
  $listener = Get-PortListener
  if (-not $listener) {
    Write-Host "Nothing is listening on port $Port." -ForegroundColor DarkGray
    return
  }

  $pidValue = $listener.OwningProcess
  $processInfo = Get-CimInstance Win32_Process -Filter "ProcessId=$pidValue" -ErrorAction SilentlyContinue
  $commandLine = [string]$processInfo.CommandLine

  if ($commandLine -notmatch "serve-site\.mjs") {
    Write-Host "Port $Port belongs to another process (PID $pidValue). UFS will not stop it." -ForegroundColor Yellow
    return
  }

  Stop-Process -Id $pidValue -Force
  Write-Host "UFS local server stopped." -ForegroundColor Green
}

function Show-Help {
  Write-Host ""
  Write-Host "Commands:" -ForegroundColor Cyan
  Write-Host "  ufs          Open the interactive menu"
  Write-Host "  ufs start    Build, start the site, and open the browser"
  Write-Host "  ufs pull     Pull the latest main branch"
  Write-Host "  ufs update   Pull, build, start, and open"
  Write-Host "  ufs build    Build _site only"
  Write-Host "  ufs test     Syntax check, build, and run the web audit"
  Write-Host "  ufs status   Show git status and the latest commit"
  Write-Host "  ufs cursor   Open the repository in Cursor"
  Write-Host "  ufs github   Open the GitHub repository"
  Write-Host "  ufs stop     Stop the UFS Node server on port $Port"
  Write-Host ""
}

function Invoke-Action([string]$Name) {
  switch ($Name) {
    "start"  { Start-UfsSite }
    "pull"   { Invoke-UfsPull }
    "update" { Invoke-UfsPull; Start-UfsSite }
    "build"  { Invoke-UfsBuild }
    "test"   { Invoke-UfsTest }
    "status" { Show-UfsStatus }
    "cursor" { Open-UfsCursor }
    "github" { Start-Process $GitHubUrl }
    "stop"   { Stop-UfsSite }
    "help"   { Show-Help }
    default  { throw "Unknown UFS action: $Name" }
  }
}

if ($Action) {
  try {
    Invoke-Action $Action
  }
  catch {
    Write-Host ""
    Write-Host "UFS: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
  }
  exit 0
}

while ($true) {
  Write-Title
  Write-Host "  [1] Start site" -ForegroundColor Green
  Write-Host "      Build + local server + browser" -ForegroundColor DarkGray
  Write-Host ""
  Write-Host "  [2] Pull latest from GitHub"
  Write-Host "  [3] Pull + start site" -ForegroundColor Cyan
  Write-Host "  [4] Build site only"
  Write-Host "  [5] Validate / test"
  Write-Host "  [6] Git status"
  Write-Host "  [7] Open in Cursor"
  Write-Host "  [8] Open GitHub"
  Write-Host "  [9] Stop local server"
  Write-Host "  [H] Help / command list"
  Write-Host "  [0] Exit"
  Write-Host ""

  $choice = Read-Host "  Choose"

  try {
    switch ($choice.Trim().ToLowerInvariant()) {
      "1" { Start-UfsSite }
      "2" { Invoke-UfsPull }
      "3" { Invoke-UfsPull; Start-UfsSite }
      "4" { Invoke-UfsBuild }
      "5" { Invoke-UfsTest }
      "6" { Show-UfsStatus }
      "7" { Open-UfsCursor }
      "8" { Start-Process $GitHubUrl }
      "9" { Stop-UfsSite }
      "h" { Show-Help }
      "help" { Show-Help }
      "0" { break }
      default { Write-Host "Choose 0-9 or H." -ForegroundColor Yellow }
    }
  }
  catch {
    Write-Host ""
    Write-Host "UFS: $($_.Exception.Message)" -ForegroundColor Red
  }

  if ($choice.Trim() -eq "0") { break }
  Write-Host ""
  Read-Host "Press Enter to return to the menu" | Out-Null
}
