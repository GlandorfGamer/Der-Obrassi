module.exports={
    name: "suggest",
    aliases: ['suggest', 'suggestion'],
    description: "Guys can suggest something",
    execute(message, args, Discord){

        

        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!channel) return message.channel.send('suggstions channel does not exist!');

        let messageArgs = args.join(' ');
        if(!messageArgs) return message.reply("What do you wan't to suggest?");
        const embed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        })
    }
}