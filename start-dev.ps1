# Скрипт для запуска Next.js + TinaCMS без проблем

Write-Host "🔍 Проверка запущенных процессов..." -ForegroundColor Cyan

# Убиваем процессы на портах 3000, 4001, 9000
$ports = @(3000, 4001, 9000)

foreach ($port in $ports) {
    $connections = netstat -ano | findstr ":$port"
    if ($connections) {
        Write-Host "📌 Найдены процессы на порту $port" -ForegroundColor Yellow
        
        # Извлекаем PID из вывода netstat
        $pids = $connections | ForEach-Object {
            if ($_ -match '\s+(\d+)\s*$') {
                $matches[1]
            }
        } | Select-Object -Unique | Where-Object { $_ -ne "0" }
        
        foreach ($pid in $pids) {
            try {
                Write-Host "  ❌ Убиваем процесс $pid на порту $port..." -ForegroundColor Red
                taskkill /F /PID $pid 2>$null | Out-Null
            } catch {
                # Игнорируем ошибки
            }
        }
    }
}

# Удаляем lock файл
Write-Host "🧹 Очистка lock файла..." -ForegroundColor Cyan
Remove-Item -Path ".next\dev\lock" -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".next\dev" -Recurse -Force -ErrorAction SilentlyContinue

# Небольшая пауза
Start-Sleep -Seconds 1

# Запускаем dev сервер
Write-Host "🚀 Запуск dev сервера..." -ForegroundColor Green
Write-Host ""
npm run dev
