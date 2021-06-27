module.exports =  {
  name: 'axorep',
  description: 'Reply to stupid axolotl',
  execute(message, Discord, spingrep) {
    if (message.embeds[0]){
      if (message.embeds[0].title.includes('Axolotl Feels')) {
        let embed = new Discord.MessageEmbed()
        .setColor('#b780e6')
        .setDescription('Shaddap Axolotl\! No one care about how u feel\!')
        message.channel.send(embed)
      }
    }
    if(spingrep){
      if (message.content.includes('pong!')){
        message.channel.send('\<\@578954683310145567\> Pong\!');
      }
    }
  }
}