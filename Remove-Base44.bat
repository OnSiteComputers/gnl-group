@echo off
REM =====================================================================
REM  Remove-Base44.bat  -  deletes the 11 dead Base44 files from gnl-group
REM
REM  HOW TO USE:
REM    1. Put this .bat inside your repo:  C:\Github\gnl-group\
REM    2. Double-click it.
REM    3. Then run Deploy & Push (pick gnl-group) to push the deletions.
REM
REM  These 11 files are all DEAD CODE - nothing in App.jsx or any page
REM  imports them. Verified with a clean production build (zero base44
REM  references in the shipped bundle).
REM =====================================================================

echo Deleting dead Base44 files from gnl-group...
echo.

del /f /q "src\api\base44Client.js"                     2>nul && echo   deleted src\api\base44Client.js
del /f /q "src\lib\AuthContext.jsx"                      2>nul && echo   deleted src\lib\AuthContext.jsx
del /f /q "src\lib\app-params.js"                        2>nul && echo   deleted src\lib\app-params.js
del /f /q "src\components\ProtectedRoute.jsx"            2>nul && echo   deleted src\components\ProtectedRoute.jsx
del /f /q "src\components\UserNotRegisteredError.jsx"    2>nul && echo   deleted src\components\UserNotRegisteredError.jsx
del /f /q "src\components\onsite\OnsiteContact.jsx"      2>nul && echo   deleted src\components\onsite\OnsiteContact.jsx
del /f /q "src\components\onsite\OnsiteNavbar.jsx"       2>nul && echo   deleted src\components\onsite\OnsiteNavbar.jsx
del /f /q "src\pages\Login.jsx"                          2>nul && echo   deleted src\pages\Login.jsx
del /f /q "src\pages\Register.jsx"                       2>nul && echo   deleted src\pages\Register.jsx
del /f /q "src\pages\ForgotPassword.jsx"                 2>nul && echo   deleted src\pages\ForgotPassword.jsx
del /f /q "src\pages\ResetPassword.jsx"                  2>nul && echo   deleted src\pages\ResetPassword.jsx

echo.
echo Done. Now run Deploy ^& Push (pick gnl-group) to push the deletions.
echo.
pause
