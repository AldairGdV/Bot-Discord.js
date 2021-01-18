const Discord = require('discord.js');

module.exports = {
    name: "banana",
    description: "Trigegr yourself",

    async run (client, message, args) {


    let replies = ["3", "4", "5", "6", "7", "8", "9", "10","11","12","13","14","15","16","17","18","19","20","21"];

    let member = message.mentions.users.first()

    if(!member){

        let bananaembed = new Discord.MessageEmbed()

        .setTitle("**La banana de **"+message.author.username+"** mide **"+replies[Math.floor(Math.random() * replies.length)]+"** cm**")
        .setColor("RED")
        .setImage("https://media.giphy.com/media/1s0P1OJ1pGIYQryEGI/giphy.gif")
        message.channel.send(bananaembed);

    }else{

        let banaembed = new Discord.MessageEmbed()

        .setTitle("**La banana de **"+member.username+"** mide **"+replies[Math.floor(Math.random() * replies.length)]+"** cm**")
        .setColor("BLUE")
        .setImage("https://media.giphy.com/media/1s0P1OJ1pGIYQryEGI/giphy.gif")
        message.channel.send(banaembed);
    }
   


    }
}