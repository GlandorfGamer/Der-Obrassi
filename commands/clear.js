const request = require("request");

module.exports={
    name: "clear",
    description: "Clears a specific amount of messages",
    async execute(message, args){

        if(!message.member.permissions.has("CLEAR_MESSAGES")) return message.reply('You are not allowed to do that!');

        if(!args[0]) return message.reply("Please enter the amount of messages you wan't to clear! (Max: 100)");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");

        if(args[0] > 100) return message.reply("You can't delete more than 100 messages at a time!");
        if(args[0] < 1) return message.reply("You must delete at least one message");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });

    }
}