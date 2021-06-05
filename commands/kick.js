module.exports={
    name: "kick",
    description: "Kicks a player",
    execute(message, args){

        if(!message.member.permissions.has("KICK_MEMBERS")){
            message.reply('You are not allowed to do that!');
            return;
        }

        const user = message.mentions.users.first();

        if(user){
            const member = message.guild.member(user);

            if(member){
                member.kick('you were kicked!').then(() =>{
                    message.reply(`Succesfully kicked ${user.tag}`);
                }).catch(err =>{
                    message.reply('I was unable to kick this person!');
                });
            }else{
                message.reply("That user isn't in this Server!");
            }
        }else{
            message.reply("You need to specify a person!");
        }

    }
}