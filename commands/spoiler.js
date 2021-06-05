module.exports={
    name: "spoiler",
    description: "Packt etwas in einen Spoiler",
    execute(message, args, Discord){

        if(!args[0]){
            message.channel.send("What do you wan't me to spoiler?");
            return;
        }

        let msgArgs = args.slice(0).join(" ");

        message.channel.send("||" + msgArgs + "||");
        
    }
}