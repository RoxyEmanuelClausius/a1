const { commandHandler, automodHandler, statsHandler } = require("@src/handlers");
const { getSettings } = require("@schemas/Guild");
const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");
const { EMBED_COLORS } = require("@root/data/config.js");

/**
 * @param {import('@src/structures').BotClient} client
 * @param {import('discord.js').Message} message
 * @param {import('discord.js').Guild} guild
 */
module.exports = async (client, message, newPrefix, guild) => {
  if (!message.guild || message.author.bot) return;
  const settings = await getSettings(message.guild);

  // check for bot mentions
  if (message.content.includes(`${client.user.id}`)) {

    let embed = new EmbedBuilder()
      .setColor(EMBED_COLORS.BOT_EMBED)
      .setDescription(
        `[+] - My prefix is \`${settings.prefix}\` in **${message.guild.name}**\n` +
        `[+] - You can see my all of my commands by type \`${settings.prefix}help\``
        )

    message.reply({ embeds: [embed] });
  }

  // command handler
  let isCommand = false;
  if (message.content && message.content.startsWith(settings.prefix)) {
    const invoke = message.content.replace(`${settings.prefix}`, "").split(/\s+/)[0];
    const cmd = client.getCommand(invoke);
    if (cmd) {
      isCommand = true;
      commandHandler.handlePrefixCommand(message, cmd, settings);
    }
  }

  // stats handler
  statsHandler.trackMessageStats(message, isCommand, settings);
};
