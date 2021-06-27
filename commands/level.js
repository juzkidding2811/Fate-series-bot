
const Discord = require('discord.js');
const Levels = require('discord-xp');
const canvacord = require ('canvacord');


module.exports = {
  name: 'xp',
  description: 'xp',
async execute(client, message, args){
  const target = message.author;

  const user = await Levels.fetch(target.id, message.guild.id);

  const neededXp = Levels.xpFor(parseInt(user.level) + 1);

  if (!user) return message.reply('you dont have xp. try to send some message');

  var status = message.author.presence.status;
  

    const rank = new canvacord.Rank()
    .setAvatar(message.author.displayAvatarURL({ dynamic: false, format: 'png'}))
    .setCurrentXP(user.xp, '#000000')
    .setRequiredXP(neededXp, '#000000')
    .setStatus(status)
    .setProgressBar(["#b780e6","#F50101"], "GRADIENT")
    .setUsername(message.author.username, "#000000")
    .setDiscriminator(message.author.discriminator, '#000000')
    .setLevel(Number(user.level))
    .setLevelColor('#000000', '000000')
    .setRank(0,'',false)
    .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/856910093899923506/858262159761997844/unknown.png")
    .setOverlay('#ffffff', 0, false)

    rank.build()
    .then(data => {
      const attachment = new Discord.MessageAttachment(data, "RankCard.png");
      message.channel.send(attachment);
    });
  }
}
