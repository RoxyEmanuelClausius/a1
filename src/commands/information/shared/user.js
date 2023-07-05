const { EmbedBuilder } = require("discord.js");
const { EMBED_COLORS } = require("@root/data/config");

/**
 * @param {import('discord.js').GuildMember} member
 */
module.exports = (member) => {
  let color = member.displayHexColor;
  if (color === "#000000") color = EMBED_COLORS.BOT_EMBED;

  let rolesString = member.roles.cache.map((r) => `<@&${r.id}>`).join(", ");
  if (rolesString.length > 1024) rolesString = rolesString.substring(0, 1020) + "...";

  const embed = new EmbedBuilder()
    .setAuthor({
      name: `User information for ${member.displayName}`,
      iconURL: member.user.displayAvatarURL(),
    })
    .setThumbnail(member.user.displayAvatarURL())
    .setColor(color)
    .addFields(
      {
        name: "User Data",
        value: `<@${member.user.id}> \`[ ${member.id} ]\``,
        inline: false,
      },
      {
        name: "Joined",
        value: member.joinedAt.toUTCString(),
        inline: true
      },
      {
        name: "Registered",
        value: member.user.createdAt.toUTCString(),
        inline: true
      },
      {
        name: `Roles [${member.roles.cache.size}]`,
        value: rolesString,
      },
      {
        name: "Avatar-URL",
        value: `[Click Here](${member.user.displayAvatarURL({ extension: "png" })})`,
      }
    )
    .setFooter({ text: `Requested by ${member.user.tag}` })
    .setTimestamp(Date.now());

  return { embeds: [embed] };
};
