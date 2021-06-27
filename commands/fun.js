const DIG = require("discord-image-generation")
module.exports = {
  name:'fun',
  description:'stupid commands',
  async execute(message, args, Discord, command){
    if(command === 'howgay') {
      var rating = Math.floor(Math.random() * 100) + 1;
      /*** 
      if (message.author.id === '591972914513969170'){
        var rating = 100
      }
      */
      message.reply(`you are ${rating}% gay :rainbow_flag: `);
      if (rating == 100){
        const role = message.guild.roles.cache.get('858028410210484274');
        await message.guild.members.cache.get(message.author.id).roles.add(role.id).catch(err => console.Log(err));
        let img = await new DIG.Gay().getImage(message.author.displayAvatarURL({dynamic: false, format: 'png'}))
        let file = new Discord.MessageAttachment(img, "gay.png")
        let embed = new Discord.MessageEmbed()
        .setColor("#B780E6")
        .setTitle('Gay Certificate')
        .setDescription(`**=========================**\nName: ${message.author.username}\nGayID: \`\`\`js\n${message.author.id}\`\`\`**You are now a certified gay.**\n**=========================**`)
        .setThumbnail('attachment://gay.png')
        .setTimestamp()
        message.author.send({files: [file], embed: embed})
      }
    }else if (command === 'simprate') {
      var rating = Math.floor(Math.random() * 100) + 1;
      message.reply(`you are ${rating}% SIMP!!! <:sakurapride:858376860642574346> `);
    }else if (command === 'delete') {
      var other = message.author
      if(message.mentions.users.first()) {
        var other = message.mentions.users.first();
      }
      let avatar = other.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Delete().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "delete.png");
      message.channel.send(attach)
    }else if (command === 'triggered') {
     var other = message.author
      if(message.mentions.users.first()) {
        var other = message.mentions.users.first();
      }
      let avatar = other.displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Triggered().getImage(avatar)
      let attach = new Discord.MessageAttachment(img, "triggered.gif");
      message.channel.send(attach)   
    }else if (command === 'slap') {
      let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      let avatar2 = message.mentions.users.first().displayAvatarURL({ dynamic: false, format: 'png' });
      let img = await new DIG.Batslap().getImage(avatar, avatar2);
      let attach = new Discord.MessageAttachment(img, "slap.png");
      message.channel.send(attach) 
    }
  }
}


