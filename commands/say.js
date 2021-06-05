module.exports={
    name: "say",
    description: "Says anything",
    execute(message, args){

        let msgArgs = args.slice(0).join(" ");

        message.channel.send("**" + msgArgs + "**").then(messageReaction =>{
        });

    }
}



