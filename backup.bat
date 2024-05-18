@chcp 65001>nul
@echo off>nul
setlocal

for /f "tokens=2 delims==" %%I in ('"wmic os get localdatetime /value"') do set datetime=%%I
set "YYYY=%datetime:~0,4%"
set "MM=%datetime:~4,2%"
set "DD=%datetime:~6,2%"
set "HH=%datetime:~8,2%"
set "MI=%datetime:~10,2%"
set "SS=%datetime:~12,2%"

set "archive=C:\Users\alone\Desktop\AurumCraft\backups\backup_%YYYY%-%MM%-%DD%_%HH%-%MI%-%SS%.tar.gz"
set "source=C:\Users\alone\Desktop\AurumCraft\server\worlds"

tar -czvf "%archive%" -C "%source%" .

echo -------------------------------
echo          Бекап Создан!
echo -------------------------------
endlocal