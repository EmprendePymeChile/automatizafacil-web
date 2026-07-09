@echo off
title AutomatizaFacil.org - Servidor Web Local
color 0B

echo.
echo  ============================================
echo   AutomatizaFacil.org - Iniciando servidor
echo  ============================================
echo.

cd /d "%~dp0"

echo  Abriendo navegador en 5 segundos...
echo  La web estara en: http://localhost:3000
echo.

start "" timeout /t 5 /nobreak >nul ^& start http://localhost:3000

echo  Presiona Ctrl+C para detener el servidor.
echo  ============================================
echo.

npm run dev

pause
