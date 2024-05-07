const { clearInterval } = require("timers");
const { config } = require("./manifest.json");

var time_ms = ((config.time.day * 24 + config.time.hour) * 60 + config.time.min) * 60 * 1000 + config.time.sec * 1000;
var restartTimeout;

function Restart() {
  var i = 10;
  var int = setInterval(() => {
    mc.broadcast(`${config.title} Перезапуск через §f-§e ${i} сек.`, 5);
    if (i == 0) { clearInterval(int);
      mc.getOnlinePlayers().forEach((pl) => pl.disconnect(`§l§e     Перезагрузка..\n§fВозвращайся через минуту!.`));
      log("Перезапуск!"); mc.runcmd("stop");
    } i--;
  }, 1000);
}

mc.listen("onServerStarted", () => {
  var restart = mc.newCommand("restart", "Досрочный перезапуск сервера.", PermType.GameMasters);
  restart.setCallback((_cmd, _ori, out, res) => Restart()); restart.overload([]); restart.setup();
  log(`Отсчёт до рестрата запущен! Время: ${time_ms}ms. (Дни: ${config.time.day}, Часы: ${config.time.hour}, Минуты: ${config.time.min}, Секунды: ${config.time.sec})`);
  restartTimeout = setTimeout(() => Restart(), time_ms);
});
