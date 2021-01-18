const Discord = require('discord.js');

module.exports={
    name: "among",
    description: "Mini juego aleatorio sobre among us.",
    
    async run (client, message, args){

        var test = [" No era el impostor","    Era el impostor"]
        var cantidad = ["3","4","5","6","7","8","9"];
        message.channel.send(`   . 　　　。　　　　•　 　ﾟ　　。 　　.        
                                                                
  　　　.　　　 　　.　　　　　。　　 。　. 　
                                                                    
  .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
                                                                   
 　　ﾟ　　 ${message.author.username+test[Math.floor(Math.random() * test.length)]} 　 。　.
                                                            
 　　'　　　 ${cantidad[Math.floor(Math.random() * cantidad.length)]} Tripulantes restantes 　 　　。
                                                               
 　　ﾟ　　　.　　　.  　　　　.　       .       。`);
    }
}
