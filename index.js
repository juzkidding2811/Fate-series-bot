const express = require("express");
const app = express();
const Levels = require ('discord-xp');

Levels.setURL(process.env['Mongodb']);

const { registerFont } = require('canvas');
const { join } = require('path');
registerFont(join(__dirname, '/RobotoMono-VariableFont_wght.ttf'),{family: 'RobotoMono'});

app.get("/", (req,res) => {
res.send("hello senpai!")
})

app.listen(3000, () => {
  console.log("Sakura is ready!")
})
let Discord = require("discord.js");
let client = new Discord.Client();
const prefix = '?';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(join(__dirname, 'commands')).filter(file => file.endsWith('.js'));

for(const file of commandFiles){
  const command = require(join(__dirname, 'commands', `${file}`));

  client.commands.set(command.name, command);
}


client.on("ready", () => {
  client.user.setPresence({ activity: { name: " with senpai Juz"} })

})

client.on("guildMemberAdd" , member => {
  client.commands.get('autorole').execute(client, member, Discord)
  client.commands.get('welcome').execute(member, Discord);
})
let spingrep = true;
function spingtoggle(message){
  return spingrep = !spingrep;
}

client.on("message", message => {

if(!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

if(command === "info") {
  client.commands.get('info').execute(message, args, Discord);
}
if(command === "help") {
  client.commands.get('help').execute(message, args, Discord);
}
if (command === `howgay` || command === `simprate` || command === `delete` || command === `triggered` || command === `slap`) {
  client.commands.get('fun').execute(message, args, Discord, command);
}
if(command === "kill") { 
  let victim = args
  if(message.author.id == '709077715986153480'){
    if(!victim || victim == 0) message.reply("Senpai, I dont know who to kill")
    else{
    message.channel.send(`${victim} has been kill Senpai, are you pleased?`)
    } 
  }
  else{
    if(!victim || victim == 0) message.reply("I dont know who to kill")
    else{
    message.channel.send(`${victim} has been kill`)
    }
  }
}
if (command === 'xp') {
  client.commands.get('xp').execute(client, message, args);
}


if(command === "cook") {
 client.commands.get('food').execute(message, args, Discord);
}
if(command === "spingrep" && message.author.id == '709077715986153480'){
  spingtoggle(message);
  if(spingrep){
    message.channel.send('Sping Reply is on\!');
  }else{
    message.channel.send('Sping Reply is off\!');
  }
}
if(command === 'mute' ||command === 'unmute') {
  client.commands.get('mute').execute(message, args, Discord, command);
}

});

client.on("message", message => {

  
  if(message.author.id == '709077715986153480'){
    if (message.content.toLowerCase() === "shaddap") { 
      message.channel.send("dont be so rude senpai...") 
    }
    if (message.content.toLowerCase() === "tadaima") {
      message.channel.send("Okaerinasai!").then(msg => { msg.react('⛩️') })
    } 
    if (message.content.toLowerCase() === "shaddap axolotl bot") { 
      message.channel.send("dont let me cook you🔪")
    }
    if (message.content.toLowerCase() === "ohayogozaimasu") { 
      message.channel.send("Ohayo senpai~").then(msg => { msg.react('🌅') })
    }
    if (message.content.toLowerCase() === "oyasuminasai") { 
      message.channel.send("Oyasumi senpai~").then(msg => { msg.react('🌙') })
    }
    if (message.content.toLowerCase() === "itte kimasu") { 
      message.channel.send("Senpai o matteimasu~").then(msg => { msg.react('👋') })
    }
    if (message.content.toLowerCase() === "itadakimasu") { 
      message.channel.send("Itadakimasu!").then(msg => { msg.react('🍖') })
    }
  }
  if (message.author.id == '856839482057031681'){
    client.commands.get('axorep').execute(message, Discord, spingrep);
  }
});

client.on('message', async message => {
  if(!message.guild) return;
  if(!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  const randomXP = Math.floor(Math.random() * 6) +1;
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXP);
  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    message.channel.send(`You leveled up to ${user.level}! Ganbate Senpai!`);
  }

  if (command === 'rank' || command === 'leaderboard' || command === 'lb') {
    client.commands.get('rank').execute(message, Discord, Levels, command, client);
  }
});

const token = process.env['TOKEN'];
client.login(token);



