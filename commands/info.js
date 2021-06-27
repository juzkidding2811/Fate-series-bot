module.exports = {
  name: 'info',
  description: 'This is an info command',
  execute(message, args, Discord){
    let embed = new Discord.MessageEmbed()
    .setAuthor('Sakura Matou Bot', 'https://cdn.discordapp.com/attachments/775779263005589553/856933819490893874/044988f965ae96707f6074d4abf442ec.jpg')
    .setTitle("About Sakura Matou Bot ❤️")
    .setDescription("I am created on 06/23/2021")
    .setColor("#b780e6")
    .setFooter("Sakura Matou Bot", "https://cdn.discordapp.com/attachments/775779263005589553/857145193534980096/tumblr_57b8b89809f31bd7f4a3615efd45c13f_54990a5d_540.gif")
    .setThumbnail('https://cdn.discordapp.com/attachments/775779263005589553/856933819490893874/044988f965ae96707f6074d4abf442ec.jpg')
  	.addFields(
		{ name: ' Why do i exist?', value: 'This is a bot created for fun, senpai watched the fate series and decided to create me ❤️' }, 
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Who is my creator?', value:  'It\'s <@709077715986153480>', inline: true },
    { name: 'Credits', value:  '<@578954683310145567>\n<@348058540545671168>', inline: true },
	  )
    .addField('Wanna know the command for me?', 'Use ?help for more commands', true)
   	.setTimestamp()
  
    message.channel.send(embed)
  }
}