const { commandHandler, contextHandler, statsHandler } = require("@src/handlers");
const { InteractionType } = require("discord.js");
const { role } = require('@root/data/config');
/**
 * @param {import('@src/structures').BotClient} client
 * @param {import('discord.js').BaseInteraction} interaction
 */
module.exports = async (client, interaction) => {
  if (!interaction.guild) {
    return interaction
      .reply({ content: "Command can only be executed in a discord server", ephemeral: true })
      .catch(() => { });
  }

  // Slash Commands
  if (interaction.isChatInputCommand()) {
    await commandHandler.handleSlashCommand(interaction);
  }

  // buttons events 
  if (interaction.isButton()) {
    if (interaction.customId === 'japan') {
      const member = interaction.member;
      if (member.roles.cache.has(role.japan)) { // if they already have the role
        member.roles.remove(role.japan); // remove it
         interaction.reply({
          content: `Successfully removed role!<@&${role.japan}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 5000);
      } else { // if they don't have the role
        member.roles.add(role.japan); // add it
        member.roles.remove(role.vtuber)
        member.roles.remove(role.valorant)
        member.roles.remove(role.apex)
        member.roles.remove(role.hoyo)
        member.roles.remove(role.minecraft)
        member.roles.remove(role.dota)
        member.roles.remove(role.ml)
        member.roles.remove(role.market)
        member.roles.remove(role.verify)
        member.roles.remove(role.public)
        member.roles.remove(role.korea)
        member.roles.remove(role.health)

         interaction.reply({
          content: `Successfully added role!<@&${role.japan}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 30000);
      }
    }

    if (interaction.customId === 'korea') {
      const member = interaction.member;
      if (member.roles.cache.has(role.korea)) { // if they already have the role
        member.roles.remove(role.korea); // remove it
         interaction.reply({
          content: `Successfully removed role!<@&${role.korea}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 5000);
      } else { // if they don't have the role
        member.roles.add(role.korea); // add it
        member.roles.remove(role.japan)
        member.roles.remove(role.vtuber)
        member.roles.remove(role.valorant)
        member.roles.remove(role.apex)
        member.roles.remove(role.hoyo)
        member.roles.remove(role.minecraft)
        member.roles.remove(role.dota)
        member.roles.remove(role.market)
        member.roles.remove(role.verify)
        member.roles.remove(role.ml)
        member.roles.remove(role.public)
        member.roles.remove(role.health)

         interaction.reply({
          content: `Successfully added role!<@&${role.korea}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 30000);
      }
    } 

    if (interaction.customId === 'public') {
      const member = interaction.member;
      if (member.roles.cache.has(role.public)) { // if they already have the role
        member.roles.remove(role.public); // remove it
         interaction.reply({
          content: `Successfully removed role!<@&${role.public}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 5000);
      } else { // if they don't have the role
        member.roles.add(role.public); // add it
        member.roles.remove(role.japan)
        member.roles.remove(role.vtuber)
        member.roles.remove(role.valorant)
        member.roles.remove(role.apex)
        member.roles.remove(role.hoyo)
        member.roles.remove(role.minecraft)
        member.roles.remove(role.dota)
        member.roles.remove(role.market)
        member.roles.remove(role.verify)
        member.roles.remove(role.ml)
        member.roles.remove(role.korea)
        member.roles.remove(role.health)

         interaction.reply({
          content: `Successfully added role!<@&${role.public}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 30000);
      }
    } 

    if (interaction.customId === 'vtuber') {
      const member = interaction.member;
      if (member.roles.cache.has(role.vtuber)) { // if they already have the role
        member.roles.remove(role.vtuber); // remove it
         interaction.reply({
          content: `Successfully removed role!<@&${role.vtuber}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 5000);
      } else { // if they don't have the role
        member.roles.add(role.vtuber); // add it
        member.roles.remove(role.japan)
        member.roles.remove(role.valorant)
        member.roles.remove(role.apex)
        member.roles.remove(role.hoyo)
        member.roles.remove(role.minecraft)
        member.roles.remove(role.dota)
        member.roles.remove(role.ml)
        member.roles.remove(role.market)
        member.roles.remove(role.verify)
        member.roles.remove(role.public)
        member.roles.remove(role.korea)
        member.roles.remove(role.health)

         interaction.reply({
          content: `Successfully added role!<@&${role.vtuber}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 30000);
      }
    }

    //game
    if (interaction.customId === 'apex') {
      const member = interaction.member;
      if (member.roles.cache.has(role.apex)) { // if they already have the role
        member.roles.remove(role.apex); // remove it
         interaction.reply({
          content: `Successfully removed role!<@&${role.apex}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 5000);
      } else { // if they don't have the role
        member.roles.add(role.apex); // add it
        member.roles.remove(role.japan)
        member.roles.remove(role.vtuber)
        member.roles.remove(role.valorant)
        member.roles.remove(role.hoyo)
        member.roles.remove(role.minecraft)
        member.roles.remove(role.dota)
        member.roles.remove(role.ml)
        member.roles.remove(role.market)
        member.roles.remove(role.verify)
        member.roles.remove(role.public)
        member.roles.remove(role.korea)
        member.roles.remove(role.health)

         interaction.reply({
          content: `Successfully added role!<@&${role.apex}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 1800000);
      }
    }
    if (interaction.customId === 'valorant') {
      const member = interaction.member;
      if (member.roles.cache.has(role.valorant)) { // if they already have the role
        member.roles.remove(role.valorant); // remove it
         interaction.reply({
          content: `Successfully removed role!<@&${role.valorant}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 5000);
      } else { // if they don't have the role
        member.roles.add(role.valorant); // add it
        member.roles.remove(role.japan)
        member.roles.remove(role.vtuber)
        member.roles.remove(role.apex)
        member.roles.remove(role.hoyo)
        member.roles.remove(role.minecraft)
        member.roles.remove(role.dota)
        member.roles.remove(role.ml)
        member.roles.remove(role.market)
        member.roles.remove(role.verify)
        member.roles.remove(role.public)
        member.roles.remove(role.korea)
        member.roles.remove(role.health)

         interaction.reply({
          content: `Successfully added role!<@&${role.valorant}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 1800000);
      }
    }
    if (interaction.customId === 'hoyo') {
      const member = interaction.member;
      if (member.roles.cache.has(role.hoyo)) { // if they already have the role
        member.roles.remove(role.hoyo); // remove it
         interaction.reply({
          content: `Successfully removed role!<@&${role.hoyo}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 5000);
      } else { // if they don't have the role
        member.roles.add(role.hoyo); // add it
        member.roles.remove(role.japan)
        member.roles.remove(role.vtuber)
        member.roles.remove(role.valorant)
        member.roles.remove(role.apex)
        member.roles.remove(role.minecraft)
        member.roles.remove(role.dota)
        member.roles.remove(role.ml)
        member.roles.remove(role.market)
        member.roles.remove(role.verify)
        member.roles.remove(role.public)
        member.roles.remove(role.korea)
        member.roles.remove(role.health)

         interaction.reply({
          content: `Successfully added role!<@&${role.hoyo}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 1800000);
      }
    }
    if (interaction.customId === 'minecraft') {
      const member = interaction.member;
      if (member.roles.cache.has(role.minecraft)) { // if they already have the role
        member.roles.remove(role.minecraft); // remove it
         interaction.reply({
          content: `Successfully removed role!<@&${role.minecraft}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 5000);
      } else { // if they don't have the role
        member.roles.add(role.minecraft); // add it
        member.roles.remove(role.japan)
        member.roles.remove(role.vtuber)
        member.roles.remove(role.valorant)
        member.roles.remove(role.apex)
        member.roles.remove(role.hoyo)
        member.roles.remove(role.dota)
        member.roles.remove(role.ml)
        member.roles.remove(role.market)
        member.roles.remove(role.verify)
        member.roles.remove(role.public)
        member.roles.remove(role.korea)
        member.roles.remove(role.health)

        interaction.reply({
          content: `Successfully added role!<@&${role.minecraft}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 1800000);
      }
    }
    if (interaction.customId === 'dota') {
      const member = interaction.member;
      if (member.roles.cache.has(role.dota)) { // if they already have the role
        member.roles.remove(role.dota); // remove it
        interaction.reply({
          content: `Successfully removed role!<@&${role.dota}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 5000);
      } else { // if they don't have the role
        member.roles.add(role.dota); // add it
        member.roles.remove(role.japan)
        member.roles.remove(role.vtuber)
        member.roles.remove(role.valorant)
        member.roles.remove(role.apex)
        member.roles.remove(role.hoyo)
        member.roles.remove(role.minecraft)
        member.roles.remove(role.ml)
        member.roles.remove(role.market)
        member.roles.remove(role.verify)
        member.roles.remove(role.public)
        member.roles.remove(role.korea)
        member.roles.remove(role.health)

        interaction.reply({
          content: `Successfully added role!<@&${role.dota}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 1800000);
      }
    }
     if (interaction.customId === 'health') {
       const member = interaction.member;
       if (member.roles.cache.has(role.health)) { // if they already have the role
         member.roles.remove(role.health); // remove it
         interaction.reply({
           content: `Successfully removed role!<@&${role.health}>`,
           ephemeral: true
         });
        return setTimeout(() => interaction.deleteReply(), 5000);
       } else { // if they don't have the role
         member.roles.add(role.health); // add it
         member.roles.remove(role.japan)
         member.roles.remove(role.vtuber)
         member.roles.remove(role.valorant)
         member.roles.remove(role.apex)
         member.roles.remove(role.hoyo)
         member.roles.remove(role.minecraft)
         member.roles.remove(role.dota)
         member.roles.remove(role.market)
         member.roles.remove(role.verify)
         member.roles.remove(role.public)
         member.roles.remove(role.korea)
         member.roles.remove(role.ml)

         interaction.reply({
           content: `Successfully added role!<@&${role.health}>`,
           ephemeral: true
         });
        return setTimeout(() => interaction.deleteReply(), 30000);
       }
     }

    if (interaction.customId === 'ml') {
      const member = interaction.member;
      if (member.roles.cache.has(role.ml)) { // if they already have the role
        member.roles.remove(role.ml); // remove it
        interaction.reply({
          content: `Successfully removed role!<@&${role.ml}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 5000);
      } else { // if they don't have the role
        member.roles.add(role.ml); // add it
        member.roles.remove(role.japan)
        member.roles.remove(role.vtuber)
        member.roles.remove(role.valorant)
        member.roles.remove(role.apex)
        member.roles.remove(role.hoyo)
        member.roles.remove(role.minecraft)
        member.roles.remove(role.dota)
        member.roles.remove(role.market)
        member.roles.remove(role.verify)
        member.roles.remove(role.public)
        member.roles.remove(role.korea)
        member.roles.remove(role.health)

        interaction.reply({
          content: `Successfully added role!<@&${role.ml}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 1800000);
      }
    } 

    //market
    if (interaction.customId === 'market') {
      const member = interaction.member;
      if (member.roles.cache.has(role.market)) { // if they already have the role
        member.roles.remove(role.market); // remove it
        interaction.reply({
          content: `Successfully removed role!<@&${role.market}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 5000);
      } else { // if they don't have the role
        member.roles.add(role.market); // add it
        member.roles.remove(role.japan)
        member.roles.remove(role.vtuber)
        member.roles.remove(role.valorant)
        member.roles.remove(role.apex)
        member.roles.remove(role.hoyo)
        member.roles.remove(role.minecraft)
        member.roles.remove(role.dota)
        member.roles.remove(role.ml)
        member.roles.remove(role.verify)
        member.roles.remove(role.public)
        member.roles.remove(role.korea)
        member.roles.remove(role.health)

          interaction.reply({
          content: `Successfully added role!<@&${role.market}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 30000);
      }
    }
    
    //verify
    if (interaction.customId === 'verify') {
      const member = interaction.member;
      if (member.roles.cache.has(role.verify)) { // if they already have the role
        member.roles.remove(role.verify); // remove it
        interaction.reply({
          content: `Successfully removed Verification!<@&${role.verify}>`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 5000);
      } else { // if they don't have the role
        member.roles.add(role.verify); // add it
        member.roles.remove(role.japan)
        member.roles.remove(role.vtuber)
        member.roles.remove(role.valorant)
        member.roles.remove(role.apex)
        member.roles.remove(role.hoyo)
        member.roles.remove(role.minecraft)
        member.roles.remove(role.dota)
        member.roles.remove(role.ml)
        member.roles.remove(role.market)
        member.roles.remove(role.public)
        member.roles.remove(role.korea)
        member.roles.remove(role.health)

        interaction.reply({
          content: `you are now verified withein **${member.guild.memberCount}** !`,
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 5000);
      }
    }

    const wait = require ("node:timers/promises").setTimeout;
    if (interaction.customId === 'rules') {
      const member = interaction.member;
      
       await interaction.reply({
          content: 
          `📜**RULES & KETENTUAN**📜 

Mohon Patuhi Setiap Aturan yang Berlaku di Server ini
jika tidak ingin dikenai sanksi
          
<a:arrow:1118881349261070397> **1. Respect terhadap sesama Member** 🤩
          
Setiap member Uverseni diharapkan untuk saling menghargai satu sama lain
tidak saling menghina/merendahkan dan membawa pertikaian terhadap satu pihak manapun
          
<a:arrow:1118881349261070397> **2. Dilarang Membahas/Mengirimkan Konten Sensitif** 🚯 
          
Tidak diperkenankan untuk membahas, atau mengirim konten yang mengandung unsur SARA
Rasisme, Ujaran kebencian, atau menyinggung Etnis,Ras, atau Agama manapun yang memicu suatu drama
apabila terjadi kami akan melakukan tindakan terhadap hal tersebut
          
<a:arrow:1118881349261070397> **3. Dilarang untuk melakukan Pelecehan**  ⛔ 
          
setiap perilaku menyimpang seperti pelecehan akan ditindak tegas oleh admin
maka dari itu harap jaga komunitas yang sehat di server ini, apabila ada perilaku tersebut
terjadi tanpa pantauan admin, harap berikan laporan pada kami para admin`,
          ephemeral: true
        });
        await wait(1000);
        await interaction.followUp({
          content: `<a:arrow:1118881349261070397> **4. Tidak Melakukan Promosi**  🚫 
          
tidak diperkenankan melakukan promosi ataupun spamming terhadap apapun ditiap tempat
dan apabila ketahuan akan dikenakan sanksi yang berlaku
          
promosi terhadap suatu produk hanya diperbolehkan untuk seller yang telah terdaftar pada server ini
khusus di market portal, jika ingin mendaftar jadi seller silahkan hubungi admin yang tersedia
dan pastikan memenuhi syarat dan ketentuan yang ada.
          
<a:arrow:1118881349261070397> **5. Bahas Sesuatu sesuai pada Tempatnya**  🗣️ 
          
disini kami menyediakan banyak portal yang terdiri dari banyak kumpulan komunitas
mulai dari game sampai aktivitas umum, maka dari itu pergunakan channel yang telah disediakan sesuai pada
tempatnya, seperti contoh jika ingin bahas suatu game bahaslah sesuai portal game yang dibahas
          
dan jangan lupa baca deskripsi untuk peruntukan tiap channel sebelum membahas sesuatu disana
          
<a:arrow:1118881349261070397> **6. Cek Update**  🔔
          
usahakan untuk selalu cek update yang ada di lounge atau portal lain, karena akan banyak event yang di adakan
ditiap portal nantinya, jadi supaya tidak ketinggalan selalu pantau tiap portal yang ada.
          
<a:arrow:1118881349261070397> **7. Larangan NSFW**  🔞 
          
dilarang untuk mengirimkan konten berbau Pornografi/NSFW diserver ini
jika melanggar kami tidak segan-segan untuk memberikan tindakan tegas terhadap pelanggar.`,
          
          ephemeral: true
        });
        return setTimeout(() => interaction.deleteReply(), 300000);
      } 

      if (interaction.customId === 'portal') {
        const member = interaction.member;
        
          interaction.reply({
            content: 
            `⛩️**PENJELASAN MENGENAI PORTAL :**⛩️

_Uverseni menyediakan suatu Fitur yang dinamakan Portal, ditiap portal terdapat beragam komunitas_
_ataupun tempat bahasan sesuai minat tiap orang, untuk memasuki portal kalian cukup buka kategori_
_#〔🌀〕▰▰ • Portal_
_lalu klik portal yang ingin dimasuki_

_disini kalian dapat mengakses portal manapun, akan tetapi memasuki satu portal akan menutup akses pada portal_
_lainnya, tidak ada batasan dalam memasuki portal yang ada, jadi kalian bisa berpindah portal sesuka hati_

_ditiap portal nantinya akan ada update/event yang seru untuk diikuti, jadi supaya tidak ketinggalan_
_usahakan untuk selalu pantau tiap portal di Uverseni (edited)._

`,
            ephemeral: true
          });
          return setTimeout(() => interaction.deleteReply(), 300000);
        } 
    

  }
  


  // Context Menu
  else if (interaction.isContextMenuCommand()) {
    const context = client.contextMenus.get(interaction.commandName);
    if (context) await contextHandler.handleContext(interaction, context);
    else return interaction.reply({ content: "An error has occurred", ephemeral: true }).catch(() => { });
  }

  // track stats
  statsHandler.trackInteractionStats(interaction).catch(() => { });
};
