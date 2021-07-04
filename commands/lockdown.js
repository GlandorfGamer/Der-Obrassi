module.exports={
    name: "lockdown",
    description: "Puts a channel on a lockdown",
    async execute(message, args, Discord)
        
        
        if(args[0]=="reset"){
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You don't have the permissions for that!");
        const channel = message.mentions.channels.first();
        if(!channel) return message.channel.send("This channel does not exist!");
        const rolefind = args.slice(2).join(" ");
        const role = message.guild.roles.cache.find(r => r.id === rolefind);
        if(!role) return message.channel.send("Please give a valid role id!");
        let embed = new Discord.MessageEmbed()
        .setTitle("Channel Unlocked!")
        .setDescription(`This channel has been Unlocked by ${message.author.tag}`)
        .setTimestamp();
        channel.updateOverwrite(role, {
            SEND_MESSAGES: true
        });
        await channel.send(embed)
        }
        
        
        
    }
}
