@chcp 65001>nul
@echo off> nul

@title AurumCraft [Sever] [Запуск...]

:run
cd server
title AurumCraft [Sever] [Работает]
call bedrock_server_mod.exe
title AurumCraft [Sever] [Выключение]
сd ..
title AurumCraft [Sever] [Создание Бекапа]
echo ---------------------------------
echo          Создание Бекапа
echo ---------------------------------
call backup.bat
title AurumCraft [Sever] [Перезапуск...]
echo ---------------------------------
echo            Перезапуск!
echo ---------------------------------

goto run
