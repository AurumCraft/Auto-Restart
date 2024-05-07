const { config } = require("./manifest.json");

let restartTime = ((config.time.day * 24 + config.time.hour) * 60 + config.time.min) * 60 * 1000 + config.time.sec * 1000;
let restartTimer;

function restart(reason = null) {
  let sec = 10;
  if (reason) mc.broadcast(`${config.title} Перезапуск по причине: ${reason}`);
  const interval = setInterval(() => {
    if (sec <= -1) {
      clearInterval(interval);
      mc.broadcast(`${config.title} Перезапуск!`, 5);
      setTimeout(async () => {
        mc.getOnlinePlayers().forEach((pl) => pl.disconnect(config.disconnectText));
        await mc.runcmd("stop");
      }, 1000);
    } else {
      mc.broadcast(`${config.title} Перезапуск через - ${sec} сек.`, 5);
      sec--;
    }
  }, 1000);
}

mc.listen("onServerStarted", () => {
  const cmd = mc.newCommand("restart", "Досрочный перезапуск сервера.", PermType.GameMasters);
  cmd.optional("reason", ParamType.RawText);
  cmd.overload(["reason"]);
  cmd.setCallback((_cmd, _ori, op, res) => {
    op.success(`${config.title} Успешно.`);
    clearTimeout(restartTimer);
    restart(res.reason);
  });
  cmd.setup();
  restartTimer = setTimeout(() => restart(), restartTime);
});
