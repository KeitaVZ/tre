const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
  name: 'about',
  category: 'Information',
  aliases: ['botinfo'],
  description: 'See description about this project',
  args: false,
  usage: '',
  userPrams: [],
  botPrams: ['EMBED_LINKS'],
  owner: false,
  execute: async (message, args, client, prefix) => {
    const row = new MessageActionRow().addComponents(
      new MessageButton().setLabel('Invite').setStyle('LINK').setURL(client.config.links.invite),
      new MessageButton()
        .setLabel('GitHub')
        .setStyle('LINK')
        .setURL('https://github.com/brblacky/WaveMusic'),
      new MessageButton().setLabel('Support').setStyle('LINK').setURL(client.config.links.support),
    );
    const mainPage = new MessageEmbed()
      .setAuthor({
        name: 'Nimelody',
        iconURL:
          'https://cdn.discordapp.com/attachments/1124687715674378260/1135918333603106947/Nimechan.png',
      })
      .setThumbnail(
        'https://cdn.discordapp.com/attachments/1124687715674378260/1135918333603106947/Nimechan.png',
      )
      .setColor('#303236')
      .addFields([
        { name: 'Creator' , value: '[Blacky](https://github.com/brblacky), [Venom#9718](https://github.com/Venom9718/) and [AkAbhijit](https://github.com/AkAbhijit)', inline: true },
        { name: 'Creator' , value: '[Blacky](https://github.com/brblacky)' , inline: true },
        
      ])
    return message.reply({ embeds: [mainPage], components: [row] });
  },
};