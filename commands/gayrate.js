module.exports={
    name: "gayrate",
    description: "The Gayrate command",
    execute(message, args){

        if(!args[0]){
            const gayrate = Math.floor(Math.random() * 100) + 1
            message.channel.send("You are " + gayrate + "% Gay");
        }

        if(args[0]){

            let person = message.guild.member(message.mentions.users.first() || message.guild.members.fetch(args[1]));
            const gayrate = Math.floor(Math.random() * 100) + 1
            message.channel.send(person.user.tag + " is " + gayrate + "% Gay");
        }
        
    }
}