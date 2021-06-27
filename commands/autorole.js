module.exports = {
  name: 'autorole',
  description: 'This is an autorole command',
  async execute(client, member, Discord){
    const role = member.guild.roles.cache.get('857982088754233414');
    await member.roles.add(role.id).catch(err => console.Log(err)); 
  }
} 