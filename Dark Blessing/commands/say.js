const Discord = require('discord.js');

module.exports={
    name: "say",
    description: "ni idea de que poner aqui.",

    async run (client, message, args){
        let texto = args.join(" ");

        if(!texto) return message.channel.send(`Escriba un mensaje para decir.`);
        message.channel.send(texto);
        message.delete();
            
    }
}