const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    await message.delete()
    let rUser = message.mentions.members.first();
    if(!rUser) return message.reply("No he podido encontrar a ese usuario")
    let rReason = args.slice(1).join(" ");
    if(!rReason) return message.reply("Proporciona una razón")
}

module.exports.help = {
    name: "testreport"
}