const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'responsetest',
  description: 'testing response',
  type: 1,
  options: [],
  permissions: {
    DEFAULT_MEMBER_PERMISSIONS: 'SendMessages',
  },
  run: async (client, interaction, config, db) => interaction.reply({
    embeds: [
      new EmbedBuilder()
        .setDescription(`${client.ws.ping}ms!`)
        .setColor('Blue'),
    ],
    ephemeral: true,
  }),
};
