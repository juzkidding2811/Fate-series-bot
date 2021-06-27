module.exports = {
  name: 'welcome',
  description: 'This is an welcome command',
  execute(member, Discord){

    let embed = new Discord.MessageEmbed()
    .setAuthor('Sakura Matou Bot', 'https://cdn.discordapp.com/attachments/775779263005589553/856933819490893874/044988f965ae96707f6074d4abf442ec.jpg')
    .setTitle("@" + member.user.username + " Welcome to No Game No Life💣")
    .setDescription("<@" + member.user.id + ">" + " **There are " + member.guild.memberCount + " gamers left**")
    .setImage('https://media1.tenor.com/images/46fb690457c18451954e094817b9230e/tenor.gif')
    .setColor("#b780e6")
    .setFooter('Sakura Matou Bot', 'https://cdn.discordapp.com/attachments/775779263005589553/857145193534980096/tumblr_57b8b89809f31bd7f4a3615efd45c13f_54990a5d_540.gif')

    member.guild.channels.cache.get('856386334914248714').send(embed);
  }
}
