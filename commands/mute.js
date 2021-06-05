const request = require("request");

module.exports={
    name: "mute",
    description: "Mutes a player",
    execute(message, args){

        if(!message.member.permissions.has("MUTE_MEMBERS")){
            message.reply('You are not allowed to do that!');
            return;
        }

        const ms = require('ms');

        if(!args[0]){
            message.reply("You need to specify a Person!");
            return;
        }

        let person = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
        if(!person) return message.reply("Couldn't find that member");

        let mainrole = message.guild.roles.cache.find(role => role.name === "Member");
        let muterole = message.guild.roles.cache.find(role => role.name === "Muted");

        if(!muterole) return message.reply("Couln't find the mute role");

        let time = args[1];

        if(!time){
            return message.reply("You didn't specify a time!");
        }

        person.roles.add(muterole.id);
        person.roles.remove(mainrole.id);
        

        message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`);

        setTimeout(function(){
            person.roles.add(mainrole.id);
            person.roles.remove(muterole.id);
            message.channel.send(`@${person.user.tag} has now been unmuted`);
        }, ms(time));

    }
}