const { getJson } = require("@helpers/HttpUtils");
const { success, warn, error } = require("@helpers/Logger");

module.exports = class BotUtils {
  /**
   * Check if the bot is up to date
   */
 // static async checkForUpdates() {
//    const response = await getJson(`https://api.github.com/repos/keyyskuy/callista/releases?access_token=${process.env.accessToken}`);
//   if (!response.success) return error("VersionCheck: Failed to check for bot updates");
//    if (response.data) {
 //     if (
 //       require("@root/package.json").version.replace(/[^0-9]/g, "") >= response.data.tag_name.replace(/[^0-9]/g, "")
 //     ) {
  //      success("VersionCheck: Your discord bot is up to date");
  //    } else {
 //       warn(`VersionCheck: ${response.data.tag_name} update is available`);
  //    }
  //  }
//  }

  /**
   * Get the image url from the message
   * @param {import('discord.js').Message} message
   * @param {string[]} args
   */
  static async getImageFromMessage(message, args) {
    let url;

    // check for attachments
    if (message.attachments.size > 0) {
      const attachment = message.attachments.first();
      const attachUrl = attachment.url;
      const attachIsImage = attachUrl.endsWith(".png") || attachUrl.endsWith(".jpg") || attachUrl.endsWith(".jpeg");
      if (attachIsImage) url = attachUrl;
    }

    if (!url && args.length === 0) url = message.author.displayAvatarURL({ size: 256, extension: "png" });

    if (!url && args.length !== 0) {
      try {
        url = new URL(args[0]).href;
      } catch (ex) {
        /* Ignore */
      }
    }

    if (!url && message.mentions.users.size > 0) {
      url = message.mentions.users.first().displayAvatarURL({ size: 256, extension: "png" });
    }

    if (!url) {
      const member = await message.guild.resolveMember(args[0]);
      if (member) url = member.user.displayAvatarURL({ size: 256, extension: "png" });
    }

    if (!url) url = message.author.displayAvatarURL({ size: 256, extension: "png" });

    return url;
  }

  static get musicValidations() {
    return [
      {
        callback: ({ client, guildId }) => client.erelaManager.get(guildId),
        message: "<:no:1019105859592257578> No music is being played!",
      },
      {
        callback: ({ member }) => member.voice?.channelId,
        message: "<:no:1019105859592257578> You need to join my voice channel.",
      },
      {
        callback: ({ member, client, guildId }) =>
          member.voice?.channelId === client.erelaManager.get(guildId).voiceChannel,
        message: "<:no:1019105859592257578> You're not in the same voice channel.",
      },
    ];
  }
};
