const Discord = require('discord.js');


module.exports = {
    name: "ball",
    description: "Trigegr yourself",

    async run (client, message, args) {


    if(!args[0]) return message.channel.send('**Escribe una pregunta :s**');

    let replies = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente?", " ¡Claro! "," Sí....o no? "," No....o si? "," Por supuesto! "," Por supuesto que no "];

    
    let result = Math.floor((Math.random() * replies.length));

    let question = args.slice(0).join(" ");

    let ballembed = new Discord.MessageEmbed()

    .setAuthor(message.author.username)
    .setColor("RED")
    .addField("Pregunta: ",question)
    .addField("Respuesta: ",replies[result]);

    message.channel.send(ballembed);

    }
}