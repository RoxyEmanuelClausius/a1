const { getMember } = require("@schemas/Member");
const { ApplicationCommandOptionType } = require("discord.js");
const { checkInviteRewards } = require("@handlers/invite");

/**
 * @type {import("@structures/Command")}
 */
module.exports = {
  name: "resetinvites",
  description: "clear a users added invites",
  category: "INVITE",
  userPermissions: ["ManageGuild"],
  botPermissions: ["EmbedLinks"],
  command: {
    enabled: true,
    usage: "<@member>",
    aliases: ["clearinvites"],
    minArgsCount: 1,
  },
  slashCommand: {
    enabled: true,
    options: [
      {
        name: "user",
        description: "the user to clear invites for",
        type: ApplicationCommandOptionType.User,
        required: true,
      },
    ],
  },

  async messageRun(message, args) {
    const target = await message.guild.resolveMember(args[0], true);
    if (!target) return message.safeReply("Incorrect syntax. You must mention a target");
    const response = await clearInvites(message, target.user);
    await message.safeReply(response);
  },

  async interactionRun(interaction) {
    const user = interaction.options.getUser("user");
    const response = await clearInvites(interaction, user);
    await interaction.followUp(response);
  },
};

async function clearInvites({ guild }, user) {

  if (user && user.bot) return "Oops! You cannot import invites for bots";

  const invites = await guild.invites.fetch({ cache: false });

  // temporary store for invites
  const tempMap = new Map();

  for (const invite of invites.values()) {
    const inviter = invite.inviter;
    if (!inviter || invite.uses === 0) continue;
    if (!tempMap.has(inviter.id)) tempMap.set(inviter.id, invite.uses);
    else {
      const uses = tempMap.get(inviter.id) + invite.uses;
      tempMap.set(inviter.id, uses);
    }
  }

  for (const [userId, uses] of tempMap.entries()) {
    const memberDb = await getMember(guild.id, userId);
    memberDb.invite_data.added === 0;
    await memberDb.save();
  }

  return `Done! Previous invites added to ${user ? user.tag : "all members"}`;
}
