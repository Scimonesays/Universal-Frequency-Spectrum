$ErrorActionPreference = "Stop"

$Launcher = Join-Path $PSScriptRoot "ufs.ps1"
$Bin = Join-Path $HOME "bin"
$Wrapper = Join-Path $Bin "ufs.cmd"

if (-not (Test-Path $Launcher)) {
  throw "Could not find tools\ufs.ps1."
}

New-Item -ItemType Directory -Path $Bin -Force | Out-Null

$template = @'
@echo off
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "__UFS_LAUNCHER__" %*
'@

$wrapperText = $template.Replace("__UFS_LAUNCHER__", $Launcher)
Set-Content -LiteralPath $Wrapper -Value $wrapperText -Encoding ASCII

$userPath = [Environment]::GetEnvironmentVariable("Path", "User")
$parts = @($userPath -split ";" | Where-Object { $_ -and $_.Trim() })

if ($parts -notcontains $Bin) {
  $newPath = (($parts + $Bin) -join ";")
  [Environment]::SetEnvironmentVariable("Path", $newPath, "User")
  $pathChanged = $true
}
else {
  $pathChanged = $false
}

Write-Host ""
Write-Host "UFS command installed." -ForegroundColor Green
Write-Host "Launcher: $Wrapper" -ForegroundColor DarkGray
Write-Host ""

if ($pathChanged) {
  Write-Host "Close Command Prompt and open a new one so Windows reloads your PATH." -ForegroundColor Yellow
}
else {
  Write-Host "Your PATH already contains $Bin." -ForegroundColor DarkGray
}

Write-Host ""
Write-Host "Then type:" -ForegroundColor Cyan
Write-Host "  ufs"
Write-Host ""
Write-Host "Also available: ufs start, ufs pull, ufs update, ufs test, ufs status" -ForegroundColor DarkGray
