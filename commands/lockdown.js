module.exports={
    name: "lockdown",
    description: "Puts a channel on a lockdown",
    async execute(message, args, Discord){
        
       
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You don't have the permissions for that!");
        const channel = message.mentions.channels.first();
        if(!channel) return message.channel.send("This channel does not exist!");
        const rolefind = args.slice(1).join(" ");
        const role = message.guild.roles.cache.find(r => r.id === rolefind);
        if(!role) return message.channel.send("Please give a valid role id!");
        const messagesent = args.slice(2).join(" ");
        if(!messagesent) return message.channel.send("Please specify a reason to put this channel on a lockdown!")
        let embed = new Discord.MessageEmbed()
        .setTitle("Channel Locked!")
        .setDescription(`This channel has been Locked by ${message.author.tag}`)
        .addField(messagesent)
        .setTimestamp();
        channel.updateOverwrite(role, {
            SEND_MESSAGES: false
        });
        await channel.send(embed)
        
        
        
        
    }
}
