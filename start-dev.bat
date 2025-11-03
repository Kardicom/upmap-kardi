@echo off
chcp 65001 >nul
echo 🔍 Остановка старых процессов...

REM Убиваем все node процессы (Next.js и TinaCMS)
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do taskkill /F /PID %%a 2>nul
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :4001') do taskkill /F /PID %%a 2>nul
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :9000') do taskkill /F /PID %%a 2>nul

REM Удаляем lock
if exist .next\dev\lock del /F /Q .next\dev\lock 2>nul

REM Пауза
timeout /t 2 /nobreak >nul

echo 🚀 Запуск dev сервера...
echo.
npm run dev
