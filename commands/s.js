exports.run = function(bot, msg, args) {
    let statuses = {
      "online": "online",
      "on": "online",
      "invisible": "invisible",
      "offline": "invisible",
      "off": "invisible",
      "invis": "invisible",
      "i": "invisible",
      "dnd": "dnd"
    };
    let status = statuses[args[0].toLowerCase()];
    if(!status) {
      return msg.edit(`Apparently I'm an idiot because ${status} isn't a valid status. Fucking derp.`).then(setTimeout(msg.delete.bind(msg), 1000));
    }
    if(status === "on") status = "online";
    if(status === "off") status = "invisible";
    if(status === "i") status = "invisible";
    if(status === "offline") status = "invisible";
    bot.user.setStatus(status)
    .then(u=> {
      msg.edit(`Status changed to ${status}`).then(setTimeout(msg.delete.bind(msg), 1000));
    }).catch(e=> {
      msg.edit(`Error while changing status to: ${status}\n\`\`\`${e}\`\`\``).then(setTimeout(msg.delete.bind(msg), 1000));
    });
};
