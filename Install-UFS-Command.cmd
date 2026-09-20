@echo off
setlocal
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0tools\install-ufs-command.ps1"
if errorlevel 1 (
  echo.
  echo UFS launcher installation failed.
  pause
  exit /b 1
)
echo.
pause
