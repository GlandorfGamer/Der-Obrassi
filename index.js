const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const fs = require('fs');

client.commands = new Discord.Collection();

const cheerio = require('cheerio');

const talkedRecently = new Set();

const msg = require('msg');

const request = require('request');
const memberCounter = require('./commands/member-counter');

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () =>{
    console.log('Bot online');
    client.user.setActivity('ob!help', {type: 'PLAYING'}).catch(console.error);
    memberCounter(client);
})

const prefix = 'ob!'

client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }else if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }else if(command === 'suggest'){

        if (talkedRecently.has(message.author.id)) {
            message.reply("Cooldown is 1m");
            message.delete();
            return;
          }

          

          talkedRecently.add(message.author.id);
        setTimeout(() => {
         talkedRecently.delete(message.author.id);
        }, 100000);

        client.commands.get('suggest').execute(message, args, Discord, msg);
        
    }else if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }else if(command === 'say'){
        client.commands.get('say').execute(message, args);
    }else if(command === 'spoiler'){
        client.commands.get('spoiler').execute(message, args);
    }else if(command === 'gayrate'){
        client.commands.get('gayrate').execute(message, args);
    }else if(command === '8ball'){
        client.commands.get('8ball').execute(message, args);
    }else if(command === 'hack'){
        client.commands.get('hack').execute(message, args);
    }else if(command === 'imagine'){
        client.commands.get('imagine').execute(message, args, Discord);
    }else if(command === 'reslockdown'){
        client.commands.get('reslockdown').execute(message, args, Discord);
    }
})



client.login(process.env.token);
