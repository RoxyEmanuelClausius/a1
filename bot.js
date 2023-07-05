require("dotenv").config();
require("module-alias/register");

// register extenders
require("@helpers/extenders/Message");
require("@helpers/extenders/Guild");
require("@helpers/extenders/GuildChannel");

// const { checkForUpdates } = require("@helpers/BotUtils");
const { initializeMongoose } = require("@src/database/mongoose");
const { BotClient } = require("@src/structures");
const { validateConfiguration } = require("@helpers/Validator");

validateConfiguration();

// initialize client
const client = new BotClient();
client.loadCommands("src/commands");
client.loadContexts("src/contexts");
client.loadEvents("src/events");

// find unhandled promise rejections
process.on("unhandledRejection", (err) => client.logger.error(`Unhandled exception`, err));

(async () => {
  // initialize the database
  await initializeMongoose();
  // start the client
  await client.login(process.env.BOT_TOKEN);
})();

// //join to create

// const joinschema = require('src/database/schemas/jointocreate');
// const joinchannelschema = require('src/database/schemas/jtc');
// const { ChannelType, EmbedBuilder } = require("discord.js");

// client.on(Event.VoiceStateUpdate, async (oldState, newState) => {

//   try {
//     if (newState.member.guild === null) return;
//   } catch (err) {
//     return;
//   }

//   const joindata = await joinschema.findOne({  Guild: newState.guild.id});
//   const joinchanneldata = await joinchannelschema.findOne({ Guild: newState.member.guild.id, User: newState.member.id});

//   const voicechannel = newState.channel;

//   if(!joindata) return;

//   if (!voicechannel) return;
//   else{

//     if (voicechannel.id === joindata.Channel) {
//       if (joinchanneldata) {
//         try {
//           return await newState.member.send({ content: `You already have a voice channel open right now!`, ephemeral: true});
//         } catch (err) {
//           return;
//         }
//       } else {
//         try {
//           const channel = await newState.member.guild.channel.create({
//             type: ChannelType.GuildVoice,
//             name: `${newState.member.user.username}-room`,
//             userLimit: joindata.VoiceLimit,
//             parent: joindata.Category
//           })
  
//           try {
//             await newState.member.voice.setChannel(channel.id);
//           } catch (err) {
//             return;
//           }
  
//           setTimeout(() => {
//             joinchannelschema.create({
//               Guild: newState.member.guild.id,
//               Channel: channel.id,
//               User: newState.member.id
//             }, 500)
//           })
//         } catch (err) {
//           try {
//             await newState.member.send({ content: `i could not create ur channel, i may be missing permissions`});
//           } catch (err) {
//             return;
//           }
  
//           return;
  
//         }
  
//         try {
  
//           const embed = new EmbedBuilder()
//           .setColor("blue")
//           .setTimestamp()
//           .setAuthor({ name: `Join to create System`})
//           .setFooter({ text:` Channel create`})
//           .setTitle('> Channel Created')
//           .addFields({ name: 'Channel Created', value:`> Ur voice channel has been \n> created in **${newState.member.guild.name}**`})
  
//           await newState.member.send({ embeds: [embed] });
//         }catch (err) {
//           return;
//         }
//       }

//     } 
//   }
// })

// client.on(Event.VoiceStateUpdate, async (oldState, newState) => {

//   try{
//     if (oldState.member.guild === null) return;
//   } catch (err) {
//     return;
//   }

//   const leavechanneldata = await joinchannelschema.findOne({ Guild: oldState.member.guild.id, User: oldState.member.id});
//   if (!leavechanneldata) return;
//   else {
//     const voicechannel = await oldState.member.guild.channels.cache.get(leavechanneldata.Channel);

//     try {
//       await voicechannel.delete();
//     } catch (err) {
//       return;
//     }

//     await joinchannelschema.deleteMany({ Guild: oldState.guild.id, User: oldState.member.id});
//     try {
        
//       const embed = new EmbedBuilder()
//       .setColor("blue")
//       .setTimestamp()
//       .setAuthor({ name: `Join to create System`})
//       .setFooter({ text:` Channel Delete`})
//       .setTitle('> Channel Delete')
//       .addFields({ name: 'Channel Delete', value:`> Ur voice channel has been \n> Delete in **${newState.member.guild.name}**`})

//       await newState.member.send({ embeds: [embed] });

//     } catch(err) {
//       return;
//     }
//   }
// })