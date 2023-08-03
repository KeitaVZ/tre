const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'support',
  category: 'Information',
  aliases: [],
  description: 'Ga ada support2an, gw mager',
  args: false,
  usage: '',
  userPrams: [],
  botPrams: ['EMBED_LINKS'],
  owner: false,
  execute: async (message, args, client, prefix) => {
    var support = client.config.links.support;

    const row = new MessageActionRow().addComponents(
      new MessageButton().setLabel('Support Server').setStyle('LINK').setURL(support),
    );
    const embed = new MessageEmbed()
      .setDescription(`KAN GW BILANG GA USAH SUPPORT2AN ANJNG!`)
      .setColor(client.embedColor);
    await message.reply({ embeds: [embed], components: [row] });
  },
};
