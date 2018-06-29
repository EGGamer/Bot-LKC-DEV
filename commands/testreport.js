const Discord = require("discord.js");
const Report = require("../models/report.js");
const mongoose = require("mongoose");


module.exports.run = async (bot, message, args) => {
    mongoose.connect(process.env.MONGODB_URI);
    await message.delete()
    let rUser = message.mentions.members.first();
    if(!rUser) return message.reply("No he podido encontrar a ese usuario")
    let rReason = args.slice(1).join(" ");
    if(!rReason) return message.reply("Proporciona una razón")


    const report = new Report({
        _id: mongoose.Types.ObjectId(),
        username: rUser.username,
        userID: rUser.id,
        reason: rReason,
        rUsername: message.author.username,
        rID: message.author.id,
        time: message.createdAt
    });

    report.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));

    message.reply("Ese reporte ha sido guardado a la base de datos")
}

module.exports.help = {
    name: "testreport"
}