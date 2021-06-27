module.exports = {
  name: 'rank',
  description: 'This is a rank command',
  async execute(message, Discord, Levels, command, client){
    var checkuser = message.author;
    if (message.mentions.users.first()) {
      var checkuser = message.mentions.users.first();
    }
    const user = await Levels.fetch(checkuser.id, message.guild.id);
    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
    if (command === 'rank'){
      const levelBar = new Map([
        [1, '***|#=========|***'],
        [2, '***|##========|***'],
        [3, '***|###=======|***'],
        [4, '***|####======|***'],
        [5, '***|#####=====|***'],
        [6, '***|######====|***'],
        [7, '***|#######===|***'],
        [8, '***|########==|***'],
        [9, '***|#########=|***'],
        [10, '***|##########|***'],
      ])
      function barFun() {
        return levelBar.get(Math.floor((user.xp / Levels.xpFor(user.level + 1)) * 10));
      }
      const exUntilNext = Levels.xpFor(user.level + 1) - user.xp;


      let embed = new Discord.MessageEmbed()
    .setColor("#b780e6")
    .setFooter("Sakura Matou Bot", "https://cdn.discordapp.com/attachments/775779263005589553/857145193534980096/tumblr_57b8b89809f31bd7f4a3615efd45c13f_54990a5d_540.gif")
    .setThumbnail(checkuser.avatarURL({dynamic: true}))
    .setDescription(`**=========================**\n**${checkuser.username}**\n*Level: ${user.level}*\n*XP: ${user.xp}*\n*${exUntilNext} xp remaining until next level*\n*Progress:* ${barFun()}\n**=========================**`)
     message.channel.send(embed)

    }else if (command === 'lb' || command === 'leaderboard'){

      if (rawLeaderboard.length < 1) return message.reply ('Nobody\'s is in the leaderboard yet Senpai');

      const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard);

      const lb = leaderboard.map( (e) => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);

      let embed = new Discord.MessageEmbed()
      .setColor("#b780e6")
      .setDescription(`${lb.join("\n\n")}`)
      .setFooter("Sakura Matou Bot", "https://cdn.discordapp.com/attachments/775779263005589553/857145193534980096/tumblr_57b8b89809f31bd7f4a3615efd45c13f_54990a5d_540.gif")
      message.channel.send(embed)
    }
  }
}