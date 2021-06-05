module.exports={
    name: "ban",
    description: "Bans a player",
    execute(message, args){

        if(!message.member.permissions.has("BAN_MEMBERS")){
            message.reply('You are not allowed to do that!');
            return;
        }

        const user = message.mentions.users.first();

        if(user){
            const member = message.guild.member(user);

            if(member){
                member.ban({ression: 'You got banned!'}).then(() =>{
                    message.reply(`Succesfully banned ${user.tag}`);
                }).catch(err =>{
                    message.reply('I was unable to ban this person!');
                });
            }else{
                message.reply("That user isn't in this Server!");
            }
        }else{
            message.reply("You need to specify a person!");
        }

    }
}