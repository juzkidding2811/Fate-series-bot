module.exports = {
  name: 'mute',
  description: 'This is a mute command',
  execute(message, args, Discord, command){

    if(command === 'mute'){
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('you dont have permission to do that\!');
      let role = message.guild.roles.cache.find(role => role.name === 'muted');
      let member = message.mentions.members.first();
      const reasonarr = new Array();
      for (var i = 1; i < args.length; i++){
        reasonarr.push(args[i])
      };
      let reason = reasonarr.join(' ');
      if (!reason) reason = 'No reason specified\!';
      if(!role) return message.channel.send('This server dont have a ``muted`` role\! Senpai');
      if(!member) return message.channel.send('You didnt mention a member\! Senpai');
      if(member.roles.cache.has(role.id)) return message.channel.send('That user is already muted\! Senpai');
      member.roles.add(role)
      .then(() => {
        message.channel.send(`Successfully muted ${member} with reason: ${reason} `);
      })
      .catch(() => {
       message.channel.send('Oops, something went wrong\! Senpai');
      })
    }else if(command === 'unmute'){
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('you dont have permission to do that\!');
      let role = message.guild.roles.cache.find(role => role.name === 'muted');
      let member = message.mentions.members.first();
      if(!role) return message.channel.send('This server dont have a ``muted`` role\! Senpai');
      if(!member) return message.channel.send('You didnt mention a member\! Senpai');
      if(member.roles.cache.has(role.id)){ 
        message.channel.send('That user is not muted anymore\! Senpai');
        member.roles.remove(role)
        .then(() => {
          message.channel.send(`Unmuted ${member}\! Senpai`);
        })
        .catch(() => {
         message.channel.send('Oops, something went wrong\! Senpai');
        })
      }
    }
  }
}
