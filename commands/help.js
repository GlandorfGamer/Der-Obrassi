module.exports={
    name: "help",
    description: "The Help command",
    execute(message, args, Discord){

        if(!args[0]){

            const embed = new Discord.MessageEmbed()
        .setTitle("Commands for this Bot")
        .addField("Fun", "ob!help fun")
        .addField("Admin Commands", "ob!help admin")
        .setColor('FADF2E')

        message.channel.send(embed);

        }

        if(args[0] == "fun"){

            const funembed = new Discord.MessageEmbed()
        .setTitle("Fun Commands")
        .addField("Say", "ob!say (what you wan't the bot to say)")
        .addField("Spoiler", "ob!spoiler (what you wan't the bot to spoiler)")
        .addField("Hack", "ob!spoiler (what you wan't the bot to spoiler)")
        .addField("Imagine", "ob!imagine (Something to imagine)")
        .addField("8ball", "ob!8ball (Ask the 8ball a question)")
        .addField("Gayrate", "ob!gayrate (Look how gay you are)")
        .addField("Spoiler", "ob!spoiler (what you wan't the bot to spoiler)")
        .addField("Suggest", "ob!suggest (you can ask the server something)")

        .setColor('FADF2E')

        message.channel.send(funembed);

        }

        if(args[0] == "admin"){

            const adminembed = new Discord.MessageEmbed()
            .setTitle("Fun Commands")
            .addField("Kick", "ob!kick (a player you wan't to kick)")
            .addField("Ban", "ob!ban (a player you wan't to ban)")
            .addField("Mute", "ob!mute (a player you wan't to mute)")
            .addField("Clear", "ob!clear (Amount of messages you wan't to clear)")
    
            .setColor('FADF2E')
    
            message.channel.send(funembed);

        }
    }
}