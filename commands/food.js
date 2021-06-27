module.exports = {
  name: 'food',
  description:'This is a food command',
  execute(message, args, Discord){
    const foodarr = [
      [1, ['Dorayaki','https://cdn.discordapp.com/attachments/725046044441706548/857091535005941760/unknown.png', 'Appear in Episode 1']],
      [2, ['Kagami mochi', 'https://cdn.discordapp.com/attachments/725046044441706548/857093835305386004/unknown.png', 'Appear in Episode 1']],
      [3, ['Oshōgatsu soba', 'https://cdn.discordapp.com/attachments/725046044441706548/857094316773212201/unknown.png', 'Appear in Episode 1 of Emiya-san Chi no Kyou no Gohan']],
      [4, ['Salmon baked in foil', 'https://cdn.discordapp.com/attachments/725046044441706548/857101343344689162/unknown.png','Appear in Episode 2 of Emiya-san Chi no Kyou no Gohan']],
      [5, ['Chirashizushi', 'https://cdn.discordapp.com/attachments/725046044441706548/857106519363551232/unknown.png','Appear in Episode 3 of Emiya-san Chi no Kyou no Gohan']],
      [6, ['Sandwich', 'https://cdn.discordapp.com/attachments/725046044441706548/857129894957416458/tempsnip.png','Appear in Episode 4 of Emiya-san Chi no Kyou no Gohan']],
      [7, ['Take no ko', 'https://cdn.discordapp.com/attachments/725046044441706548/857133202928959558/unknown.png','Appear in Episode 5 of Emiya-san Chi no Kyou no Gohan']],
      [8,['Take no ko mushi', 'https://cdn.discordapp.com/attachments/725046044441706548/857133288736423946/unknown.png','Appear in Episode 5 of Emiya-san Chi no Kyou no Gohan']],
      [9,['Takenoko no guriru', 'https://cdn.discordapp.com/attachments/725046044441706548/857133070910357544/unknown.png','Appear in Episode 5 of Emiya-san Chi no Kyou no Gohan']],
      [10,['Guratan','https://cdn.discordapp.com/attachments/725046044441706548/857146820575494154/unknown.png','Appear in Episode 5 of Emiya-san Chi no Kyou no Gohan']],
      [11,['Hanbāgā', 'https://cdn.discordapp.com/attachments/725046044441706548/857151090675810325/unknown.png','Appear in Episode 7 of Emiya-san Chi no Kyou no Gohan']],
      [12,['Omuraisu', 'https://cdn.discordapp.com/attachments/725046044441706548/857156362466230272/unknown.png','Appear in Opening and in Episode 11 of Emiya-san Chi no Kyou no Gohan']],
      [13,['Hiyashita ochadzuke and Burosu','https://cdn.discordapp.com/attachments/725046044441706548/857162715591081994/unknown.png','Appear in Episode 7 of Emiya-san Chi no Kyou no Gohan']],
      [14,['Yakimeshi', 'https://cdn.discordapp.com/attachments/725046044441706548/857182159030583306/unknown.png','Appear in Episode 8 of Emiya-san Chi no Kyou no Gohan']],
      [15,['Satoimo no nikomi with Grilled mackerel', 'https://cdn.discordapp.com/attachments/725046044441706548/857326756885037106/unknown.png','Appear in Episode 9 of Emiya-san Chi no Kyou no Gohan']],
      [16,['Kara age furaidochikin', 'https://cdn.discordapp.com/attachments/725046044441706548/857334751219548170/unknown.png','Appear in Episode 10 of Emiya-san Chi no Kyou no Gohan']],
      [17,['roasted turkey', 'https://cdn.discordapp.com/attachments/856910093899923506/857485567561957385/unknown.png','Appear in Episode 12 of Emiya-san Chi no Kyou no Gohan']],
      [18,['Potetopankēki', 'https://cdn.discordapp.com/attachments/856910093899923506/857486349983285308/unknown.png','Appear in Episode 12 of Emiya-san Chi no Kyou no Gohan']],
      [19,['Gārikkubureddo', 'https://cdn.discordapp.com/attachments/856910093899923506/857487929759498270/unknown.png','Appear in Episode 12 of Emiya-san Chi no Kyou no Gohan']],
      [20,['Shirou Rōsutobīfu', 'https://cdn.discordapp.com/attachments/856910093899923506/857488978042945536/tempsnip.png','Appear in Episode 12 of Emiya-san Chi no Kyou no Gohan']],
      [21,['Takoyaki', 'https://cdn.discordapp.com/attachments/856910093899923506/857492368735731752/unknown.png','Appear in Opening of Emiya-san Chi no Kyou no Gohan']],
      [22,['Karēraisu', 'https://cdn.discordapp.com/attachments/856910093899923506/857493776321740810/unknown.png','Appear in Opening of Emiya-san Chi no Kyou no Gohan']],
      [23,['Ebifurai', 'https://cdn.discordapp.com/attachments/856910093899923506/857496378669662218/unknown.png','Appear in Opening of Emiya-san Chi no Kyou no Gohan']],
      [24,['Inarizushi to sake and Tamago to biko','https://cdn.discordapp.com/attachments/856910093899923506/857496758775054336/unknown.png','Appear in Opening of Emiya-san Chi no Kyou no Gohan']],
      [25,['Nabe', 'https://cdn.discordapp.com/attachments/856910093899923506/857501347120152576/unknown.png','Appear in Episode 13 of Emiya-san Chi no Kyou no Gohan']],
      [26,['Zōsui','https://cdn.discordapp.com/attachments/856910093899923506/857503264278577152/unknown.png','Appear in Episode 13 of Emiya-san Chi no Kyou no Gohan']],


    ]

    const food = new Map(foodarr);
    const cooked = food.get(Math.floor(Math.random() * foodarr.length) + 1);
    let embed = new Discord.MessageEmbed()
    .setColor("#b780e6")
    .setFooter("Sakura Matou Bot", "https://cdn.discordapp.com/attachments/775779263005589553/857145193534980096/tumblr_57b8b89809f31bd7f4a3615efd45c13f_54990a5d_540.gif")
    .setTitle(cooked[0])
    .setImage(cooked[1])
    .setDescription(cooked[2])
  
    message.channel.send(embed)
  }

}