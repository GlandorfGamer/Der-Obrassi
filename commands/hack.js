module.exports={
    name: "hack",
    description: "Hacks a player",
    async execute(message, args){

        if(!args[0]){
            message.channel.send("Who do you wan't to hack?")
            return;
        }

        let msg;
       
        msg = await message.channel.send('Starting to Hack...');

        setTimeout(() => {
           
            msg.edit('Finding Discord Login... (2fa bypassed)');
        }, 1000);

        setTimeout(() => {
           
            msg.edit('Login: ********** \nPassword: *******');
        }, 2000);

        setTimeout(() => {
           
            msg.edit('Reporting account to the TOS...');
        }, 3000);

        setTimeout(() => {
           
            msg.edit('Hacking the IP...');
        }, 3000);

        setTimeout(() => {
           
            msg.edit('IP: 127.0.0.1');
        }, 5000);

        setTimeout(() => {
           
            msg.edit('Selling Data to Goverment...');
        }, 7000);

        setTimeout(() => {
           
            msg.edit('The dangerous and totally real hack is done.');
        }, 8000);
        

    }
}

