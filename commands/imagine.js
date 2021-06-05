module.exports={
    name: "imagine",
    description: "Imagine something",
    execute(message, args, Discord){

        if(!args[0]){
            message.channel.send("Give me something to imagine 👀")
        }

        if(args[0]){

            let msgArgs = args.slice(0).join(" ");

            const embed = new Discord.MessageEmbed()
            .setTitle("Imagine " + msgArgs)
            .setDescription("Imagine Imagining")
            .setColor('FADF2E')

            message.channel.send(embed);
        }
    }
}