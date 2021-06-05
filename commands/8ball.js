module.exports={
    name: "8ball",
    description: "Ask the 8ball",
    execute(message, args){

        if(!args[0]){
            message.channel.send("What do you wan't to ask the 8ball?");
        }


        if(args[0]){
            const gayrate = Math.floor(Math.random() * 20) + 1


            if(gayrate == 1){
                message.channel.send("🎱" + " heck off, you know that's a no");
            }

            if(gayrate == 2){
                message.channel.send("🎱" + " im not sure but ur def stupid");
            }

            if(gayrate == 3){
                message.channel.send("🎱" + " im an 8ball, not a deal with ur crap ball");
            }

            if(gayrate == 4){
                message.channel.send("🎱" + " when you grow a braincell, yes");
            }

            if(gayrate == 5){
                message.channel.send("🎱" + " that would be a hell no");
            }

            if(gayrate == 6){
                message.channel.send("🎱" + " can you not");
            }

            if(gayrate == 7){
                message.channel.send("🎱" + " never, dumbass");
            }

            if(gayrate == 8){
                message.channel.send("🎱" + " ask again later when I'm less busy with ur mum");
            }

            if(gayrate == 9){
                message.channel.send("🎱" + " sure, I literally couldn't care less");
            }

            if(gayrate == 11){
                message.channel.send("🎱" + " yes!!!!");
            }

            if(gayrate == 12){
                message.channel.send("🎱" + " honestly I don't care lol");
            }

            if(gayrate == 13){
                message.channel.send("🎱" + " yes???");
            }

            if(gayrate == 14){
                message.channel.send("🎱" + " i can tell you certainly, no");
            }

            if(gayrate == 15){
                message.channel.send("🎱" + " ok, whatever yes");
            }

            if(gayrate == 16){
                message.channel.send("🎱" + " no???");
            }

            if(gayrate == 17){
                message.channel.send("🎱" + " No, you dingleberry");
            }

            if(gayrate == 18){
                message.channel.send("🎱" + " no lmfao");
            }

            if(gayrate == 19){
                message.channel.send("🎱" + " dont sass me bitch");
            }

            if(gayrate == 20){
                message.channel.send("🎱" + " sure, why not");
            }

        }
        
    }
}