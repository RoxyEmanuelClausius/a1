const { inviteHandler } = require("@src/handlers");
const Canvas = require('@napi-rs/canvas');
const { WELCOMECH, WELCOMEIMG } = require('@root/data/config');
const { request } = require('undici');
const { createCanvas, loadImage } = require("@napi-rs/canvas");
const { AttachmentBuilder, Client, Events, GatewayIntentBits } = require('discord.js');

/**
 * @param {import('@src/structures').BotClient} client
 * @param {import('discord.js').GuildMember} member
 */
module.exports = async (client, member) => {
  if (!member || !member.guild ) return;

  // Check if invite tracking is enabled
  inviteHandler.trackJoinedMember(member);

 
};