const { EmbedBuilder } = require("discord.js");

const maps = Array(
    'Ascent',
    'Breeze',
    'Bind',
    'Fracture',
    'Haven',
    'Icebox',
    'Pearl',
    'Split'
);

module.exports = {
    name: "randommap",
    description: "Random map picker",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        const map = maps[Math.floor(Math.random() * maps.length)];
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setDescription(`Your map pick: ${map}`)
                .setColor('Green')
            ],
            ephemeral: false
        })
    },
};