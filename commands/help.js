module.exports = {
  name: 'help',
  description: 'This is a help command',
  execute(message, args, Discord){
    let embed = new Discord.MessageEmbed()
    .setAuthor('Sakura Matou Bot', 'https://cdn.discordapp.com/attachments/775779263005589553/856933819490893874/044988f965ae96707f6074d4abf442ec.jpg')
    .setColor("#B780E6")
    .setFooter("Sakura Matou Bot", "https://cdn.discordapp.com/attachments/775779263005589553/857145193534980096/tumblr_57b8b89809f31bd7f4a3615efd45c13f_54990a5d_540.gif")
    .setTitle("Commands") 
    .addFields(
		{ name: 'Moderation', value: '🔈?mute\n🔊?unmute\n\u200B' }, 
		{ name: 'Fun', value:  '🍳?cook\n🔪?kill\n:rainbow_flag:?howgay\n<:sakurapride:858376860642574346>?simprate\n\u200B', inline: true },
    { name: 'Ranks', value:  '🏆?lb\n🎖️?rank\n📖?xp', inline: false },
    )
    message.channel.send(embed)
  }
}