# =====================================================================
#  Build-Exe.ps1  -  build: 2026-07-05 v1
#  Greg Blair / GNL Digital Group
#
#  WHAT THIS DOES
#    Compiles Deploy-And-Publish.ps1 into a real Windows .exe named
#    Deploy-And-Publish.exe, with your logo baked in as the icon and
#    no console window.
#
#  YOU RUN THIS ONCE. After it succeeds you have the .exe forever and
#  can delete this build script if you want. Re-run it only if you
#  ever change Deploy-And-Publish.ps1.
#
#  HOW TO RUN  (copy-paste, 3 lines)
#    1. Put these 3 files in the SAME folder (e.g. C:\Github\Application):
#         Deploy-And-Publish.ps1
#         deploy.ico
#         Build-Exe.ps1   (this file)
#    2. Open PowerShell, then run:
#         cd C:\Github\Application
#         powershell -ExecutionPolicy Bypass -File .\Build-Exe.ps1
#    3. Wait ~10 seconds. Deploy-And-Publish.exe appears in the folder.
# =====================================================================

$ErrorActionPreference = "Stop"

# Work in the folder this script lives in, no matter where it's launched from
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $here

$src  = Join-Path $here "Deploy-And-Publish.ps1"
$ico  = Join-Path $here "deploy.ico"
$exe  = Join-Path $here "Deploy-And-Publish.exe"

Write-Host ""
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host "  Building Deploy-And-Publish.exe" -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host ""

# --- Check the source files are present -----------------------------
if (-not (Test-Path $src)) {
    Write-Host "ERROR: Can't find Deploy-And-Publish.ps1 in this folder." -ForegroundColor Red
    Write-Host "       Make sure all 3 files are together and try again." -ForegroundColor Red
    Read-Host "`nPress Enter to close"
    exit 1
}
if (-not (Test-Path $ico)) {
    Write-Host "WARNING: deploy.ico not found - exe will build with a default icon." -ForegroundColor Yellow
    $ico = $null
}

# --- Make sure ps2exe is installed ----------------------------------
Write-Host "Checking for ps2exe module..." -ForegroundColor Gray
if (-not (Get-Module -ListAvailable -Name ps2exe)) {
    Write-Host "  ps2exe not found. Installing it now (one-time)..." -ForegroundColor Yellow
    try {
        # Make sure we can reach the gallery
        try { [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 } catch {}
        Install-Module -Name ps2exe -Scope CurrentUser -Force -AllowClobber
        Write-Host "  ps2exe installed." -ForegroundColor Green
    }
    catch {
        Write-Host ""
        Write-Host "ERROR installing ps2exe from the PowerShell Gallery:" -ForegroundColor Red
        Write-Host "  $($_.Exception.Message)" -ForegroundColor Red
        Write-Host ""
        Write-Host "Fix: run this once, answer Yes to any prompts, then re-run me:" -ForegroundColor Yellow
        Write-Host "  Install-Module ps2exe -Scope CurrentUser -Force" -ForegroundColor White
        Read-Host "`nPress Enter to close"
        exit 1
    }
} else {
    Write-Host "  ps2exe is present." -ForegroundColor Green
}

Import-Module ps2exe

# --- Remove any old exe so we know the build is fresh ----------------
if (Test-Path $exe) {
    try { Remove-Item $exe -Force } catch {}
}

# --- Compile ---------------------------------------------------------
Write-Host ""
Write-Host "Compiling... (this takes a few seconds)" -ForegroundColor Gray

$params = @{
    InputFile   = $src
    OutputFile  = $exe
    noConsole   = $true
    title       = "Deploy & Publish"
    company     = "GNL Digital Group"
    product     = "Deploy & Publish"
    description = "One-click deploy and push to GitHub"
    version     = "2.0.0.0"
}
if ($ico) { $params["iconFile"] = $ico }

try {
    Invoke-ps2exe @params
}
catch {
    Write-Host ""
    Write-Host "ERROR during compile:" -ForegroundColor Red
    Write-Host "  $($_.Exception.Message)" -ForegroundColor Red
    Read-Host "`nPress Enter to close"
    exit 1
}

# --- Report ----------------------------------------------------------
Write-Host ""
if (Test-Path $exe) {
    $sizeKB = [math]::Round((Get-Item $exe).Length / 1KB)
    Write-Host "==============================================" -ForegroundColor Green
    Write-Host "  SUCCESS" -ForegroundColor Green
    Write-Host "==============================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "  Built: Deploy-And-Publish.exe  ($sizeKB KB)" -ForegroundColor White
    Write-Host "  Location: $exe" -ForegroundColor White
    Write-Host ""
    Write-Host "  Double-click it to run. Pin it to your taskbar if you like." -ForegroundColor Gray
    Write-Host "  You can delete Build-Exe.ps1 now if you want - the exe" -ForegroundColor Gray
    Write-Host "  is fully standalone (logo is baked in)." -ForegroundColor Gray
    Write-Host ""
} else {
    Write-Host "Build finished but no exe was produced. Something went wrong." -ForegroundColor Red
}

Read-Host "Press Enter to close"
