const { CommandoClient } = require("discord.js-commando");
const discord = require("discord.js");
const path = require("path");

const bot = new CommandoClient({
	commandPrefix: "-",
});

bot.login("bot-token-here");

bot.on('ready', function(){
    console.log("Ready!");
});