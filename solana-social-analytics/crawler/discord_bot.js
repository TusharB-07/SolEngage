const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    
    // Process Discord messages for analytics
    console.log(`Message from ${message.author.username}: ${message.content}`);
});

// client.login('YOUR_BOT_TOKEN');
