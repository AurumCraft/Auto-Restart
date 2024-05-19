@chcp 65001>nul
@echo off

@title AurumCraft [Server] [Запуск...]

:run
cd server
title AurumCraft [Server] [Работает]
call bedrock_server_mod.exe
title AurumCraft [Server] [Выключение]
cd ..
title AurumCraft [Server] [Создание Бекапа...]
echo ---------------------------------
echo          Создание Бекапа
echo ---------------------------------
call backup.bat
title AurumCraft [Server] [Перезапуск...]
echo ---------------------------------
echo            Перезапуск!
echo ---------------------------------

goto run
