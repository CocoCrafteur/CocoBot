const Discord = require("discord.js");
const client = new  Discord.Client();
 
client.login(process.env.TOKEN);

var prefix = ("/");

client.on("message" , (message) => {

    if(message.content === prefix + "bonjour") {
        message.channel.send("Bonjour à toi mon ami !")   
    }});

client.on("message" , (message) => {

    

    client.on("message" , (message) => {

        if(message.content === prefix + "chat") {
            message.channel.send("https://tenor.com/view/cats-whome-cute-awe-stare-gif-4004207")   
        }});

        client.on("message" , (message) => {

            if(message.content === prefix + "infos") {
                message.channel.send("__**Les Infos sur le bot :**__") 
                message.channel.send("1. Crée par Coco_Crafteur#0882")
                message.channel.send("2. Première commandes ajoutés le 1er Juin 2020")
                message.channel.send("__**Les liens :**__")
                message.channel.send("Inviter le bot : https://discordapp.com/oauth2/authorize?client_id=712221627190083665&scope=bot&permissions=2080381998 ")
                message.channel.send("Les commandes : https://sites.google.com/view/cocobot-site-commandes  ")
                
            }}); 

         client.on("message" , (message) => {

             if(message.content === prefix + "chien") {
                 message.channel.send("https://tenor.com/view/funny-dogs-gif-10222299")
             }
             });

             client.on("message" , (message) => {

                if(message.content === prefix + "coincoin") {
                    message.channel.send("https://tenor.com/view/coin-coin-gif-13228379")
                }
                });

                client.on("message" , (message) => {

                    if(message.content === prefix + "ah") {
                        message.channel.send("https://tenor.com/view/ah-denis-brognart-tf1-koh-gif-7256068")
                    }
                    });

                    client.on("message" , (message) => {

                        if(message.content === prefix + "aog") {
                            message.channel.send("https://tenor.com/view/lol-crazy-alerte-garrison-south-park-gif-14631935")
                        }
                        });

                        client.on("message" , (message) => {

                            if(message.content === prefix + "invite") {
                                message.channel.send("Voici le lien d'invitation pour que tu puisse t'amuser !: https://discordapp.com/oauth2/authorize?client_id=712221627190083665&scope=bot&permissions=2080381998")
                            }
                            });
