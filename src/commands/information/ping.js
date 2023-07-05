const { EmbedBuilder } = require("discord.js");

/**
 * @type {import("@structures/Command")}
 */
module.exports = {
  name: "ping",
  description: "shows the current ping from the bot to the discord servers",
  category: "INFORMATION",
  command: {
    enabled: true,
  },
  slashCommand: {
    enabled: true,
    ephemeral: true,
    options: [],
  },

  async messageRun(message, args) {
    let embed = new EmbedBuilder()
      .setDescription(`🏓 Pong : \`${Math.floor(message.client.ws.ping)}ms\``)
    await message.safeReply({ embeds: [embed] });
  },

  async interactionRun(interaction) {
    let embed = new EmbedBuilder()
      .setDescription(`🏓 Pong : \`${Math.floor(message.client.ws.ping)}ms\``)
    await interaction.followUp({ embeds: [embed] });
  },
};
