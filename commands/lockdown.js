module.exports={
    name: "lockdown",
    description: "Puts a channel on a lockdown",
    execute(message, args){

        if(!message.member.permissions.has("BAN_MEMBERS")){
            message.reply('You are not allowed to do that!');
            return;
        }

        const role = message.guild.roles.everyone;
      
      if(!args.length) return message.channel.send("Please specify a query");

    }
}
