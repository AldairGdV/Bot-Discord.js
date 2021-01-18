const Discord = require('discord.js');

module.exports={
    name: "dado",
    description: "Lanza un dado aleatoriamente.",

    async run (client, message, args){
        var rpts = ["1","2","3","4","5","6"];

        message.channel.send(`Dado lanzado : `+ rpts[Math.floor(Math.random() * rpts.length)]);
           
    }
}