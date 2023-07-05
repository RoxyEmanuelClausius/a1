const { CommandCategory, BotClient } = require("@src/structures");
const { EMBED_COLORS, SUPPORT_SERVER } = require("@root/data/config.js");
const {
  EmbedBuilder,
  ActionRowBuilder,
  SelectMenuBuilder,
  Message,
  ButtonBuilder,
  CommandInteraction,
  ApplicationCommandOptionType,
  ButtonStyle,
} = require("discord.js");

/**
 * @type {import("@structures/Command")}
 */
module.exports = {
  name: "help",
  description: "command help menu",
  category: "MISC",
  botPermissions: ["EmbedLinks"],
  command: {
    enabled: true,
    usage: "[command]",
  },
  slashCommand: {
    enabled: true,
    options: [
      {
        name: "command",
        description: "name of the command",
        required: false,
        type: ApplicationCommandOptionType.String,
      },
    ],
  },

  async messageRun(message, args, data) {
    let trigger = args[0];

    // !help
    if (!trigger) {
      const response = await getHelpMenu(message);
      return message.safeReply(response);
    }
  },

  async interactionRun(interaction) {
    let cmdName = interaction.options.getString("command");

    // !help
    if (!cmdName) {
      const response = await getHelpMenu(interaction);
      return interaction.followUp(response);
    }
  },
};

/**
 * @param {CommandInteraction} interaction
 */
async function getHelpMenu({ message, client, guild }) {
  const embed = new EmbedBuilder()
    .setColor(EMBED_COLORS.BOT_EMBED)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(
      `I'm <@${client.user.id}>!\n` +
      `Multipurpose bot discord to help u guys!`
    )
  const category = [
    ...new Set(client.commands.filter((cmd) => cmd.category != 'OWNER').map((cmd) => cmd.category))
  ];

  for (const c of category) {
    const cmd = client.commands.filter((x) => x.category === c)
    embed.addFields(
      {
        name: `❯  • ${c}`,
        value: `\`\`\`py\n'${cmd.map((x) => x.name).join(", ")}'\`\`\``,
        inline: false
      }
    )
    embed.setFooter({ text: `Powered by: ${guild.name}`, iconURL: client.user.displayAvatarURL() })
  }

  return {
    embeds: [embed]
  };
}
