const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { EMBED_COLORS, ECONOMY, role } = require("@root/data/config");
const Player = require("@schemas/Player");
const STATES = require("@schemas/Stats");

/**
 * @type {import("@structures/Command")}
 */
module.exports = {
    name: "rolebuttons",
    description: "post buttons role on spesifik channels.",
    category: "ADMIN",
    botPermissions: ["EmbedLinks"],
    command: {
        enabled: true,
        aliases: ["rr"],
    },
    slashCommand: {
        enabled: false,
    },

    async messageRun(message, args) {
        const user = message.author;
        const response = await rs(user, message);
        await message.safeReply(response);
    },
};

/**
 * Track inviter by comparing new invites with cached invites
 * @param {import("discord.js").User} user
 * @param {import("discord.js").Guild} guild
 */
async function rs(user, message) {

    message.delete()

    // hobi
    const row1 = new ActionRowBuilder()
        .addComponents(
            // 5 buttons per role 
            new ButtonBuilder()
                .setCustomId('verify')
                .setLabel('Lounge')
                .setStyle(ButtonStyle.Success)
                .setEmoji('✈️'),

            new ButtonBuilder()
                .setCustomId('vtuber') // text on embeds msg
                .setLabel('Vtuber Portal') // text on buttons
                .setStyle(ButtonStyle.Success) // PRIMARY, SECONDARY, SUCCESS, DANGER, LINK
                .setEmoji('<:Vtuber:1116075317451296868>'), // Emoji on buttons

            new ButtonBuilder()
                .setCustomId('japan')
                .setLabel('Japan Culture')
                .setStyle(ButtonStyle.Success)
                .setEmoji('🎌'),

            new ButtonBuilder()
                .setCustomId('korea')
                .setLabel('Korean Culture')
                .setStyle(ButtonStyle.Success)
                .setEmoji('<:korea:1122451911203889176>'),  

            new ButtonBuilder()
                .setCustomId('public')
                .setLabel('Public Activity')
                .setStyle(ButtonStyle.Success)
                .setEmoji('🗿'),

        )

    // game 1
    const row2 = new ActionRowBuilder()
        .addComponents(
            // 5 buttons per role 
            new ButtonBuilder()
                .setCustomId('apex') // text on embeds msg
                .setLabel('Apex') // text on buttons
                .setStyle(ButtonStyle.Success) // PRIMARY, SECONDARY, SUCCESS, DANGER, LINK
                .setEmoji('<:apexlegend:1116073650328715274>'), // Emoji on buttons

            new ButtonBuilder()
                .setCustomId('valorant') // text on embeds msg
                .setLabel('Valorant') // text on buttons
                .setStyle(ButtonStyle.Success) // PRIMARY, SECONDARY, SUCCESS, DANGER, LINK
                .setEmoji('<:Valorant:1116075785489485934>'), // Emoji on buttons

            new ButtonBuilder()
                .setCustomId('hoyo') // text on embeds msg
                .setLabel('Hoyoverse Game') // text on buttons
                .setStyle(ButtonStyle.Success) // PRIMARY, SECONDARY, SUCCESS, DANGER, LINK
                .setEmoji('<:Hoyoverse:1116075597395918958>'), // Emoji on buttons

            new ButtonBuilder()
                .setCustomId('minecraft') // text on embeds msg
                .setLabel('Minecraft') // text on buttons
                .setStyle(ButtonStyle.Success) // PRIMARY, SECONDARY, SUCCESS, DANGER, LINK
                .setEmoji('<:Minecraft:1116076183344390246>'), // Emoji on buttons

        )

        // game 2
    const row3 = new ActionRowBuilder()
    .addComponents(
        // 5 buttons per role 

        new ButtonBuilder()
             .setCustomId('dota') // text on embeds msg
             .setLabel('DOTA 2') // text on buttons
             .setStyle(ButtonStyle.Success) // PRIMARY, SECONDARY, SUCCESS, DANGER, LINK
             .setEmoji('<:DOTA2:1116075960693956749>'), // Emoji on buttons

        //  new ButtonBuilder()
        //      .setCustomId('osu') // text on embeds msg
        //      .setLabel('OSU!') // text on buttons
        //      .setStyle(ButtonStyle.Success) // PRIMARY, SECONDARY, SUCCESS, DANGER, LINK
        //      .setEmoji('<:OSU:1116075107677392906>'), // Emoji on buttons

         new ButtonBuilder()
             .setCustomId('ml') // text on embeds msg
             .setLabel('Mobile Legend') // text on buttons
             .setStyle(ButtonStyle.Success) // PRIMARY, SECONDARY, SUCCESS, DANGER, LINK
             .setEmoji('<:MobileLegends:1116076753899769876>') // Emoji on buttons
    )

    // Job
    const row4 = new ActionRowBuilder()
        .addComponents(
            // 5 buttons per role 
            new ButtonBuilder()
                .setCustomId('market') // text on embeds msg
                .setLabel('Market Portal') // text on buttons
                .setStyle(ButtonStyle.Success) // PRIMARY, SECONDARY, SUCCESS, DANGER, LINK
                .setEmoji('<:Store:1116077458211471401>') // Emoji on buttons

        )

    const row5 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('verify')
                .setEmoji('✅')
                .setLabel('Lounge')
                .setStyle(ButtonStyle.Success),

        )

    const row6 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('rules')
            .setEmoji('📜')
            .setLabel('Rules & Ketentuan')
            .setStyle(ButtonStyle.Secondary)
            ,
                
        new ButtonBuilder()
            .setCustomId('portal') // text on embeds msg
            .setLabel('Penjelasan Mengenai Portal') // text on buttons
            .setStyle(ButtonStyle.Secondary) // PRIMARY, SECONDARY, SUCCESS, DANGER, LINK
            .setEmoji('🌀'), // Emoji on buttons

        // new ButtonBuilder()
        //     .setCustomId('valorant') // text on embeds msg
        //     .setLabel('Valorant') // text on buttons
        //     .setStyle(ButtonStyle.Success) // PRIMARY, SECONDARY, SUCCESS, DANGER, LINK
        //     .setEmoji('<:Valorant:1116075785489485934>'), // Emoji on buttons
        )

    const row7 = new ActionRowBuilder()
    .addComponents(           
        new ButtonBuilder()
        .setCustomId('health')
        .setLabel('Health Care')
        .setStyle(ButtonStyle.Success)
        .setEmoji('🏥'),
    )

    const embed = new EmbedBuilder()
        .setTitle(`🌀 **──・Public Portal・──** 🌀`)
        .setDescription(
            `
            \n
            _Selamat Datang di Public Portal, Setiap Portal disini akan membawamu menuju ketempat dimana tiap minat dikumpulkan_
            _Silahkan masuki Portal dengan cara klik Icon sesuai Preference yang tersedia dibawah ini :_
            \n
            \n
            ✈️ <a:arrow:1118881349261070397> <@&${role.verify}>\n
            <:Vtuber:1116075317451296868> <a:arrow:1118881349261070397> <@&${role.vtuber}>\n
            🎌 <a:arrow:1118881349261070397> <@&${role.japan}>\n
            <:korea:1122451911203889176> <a:arrow:1118881349261070397> <@&${role.korea}>\n
            🗿 <a:arrow:1118881349261070397> <@&${role.public}>\n
            🏥 <a:arrow:1118881349261070397> <@&${role.health}>\n
            \n
            > __*Disini kamu hanya diperbolehkan untuk memasuki satu portal, dan jika kamu memasuki portal lain maka akan menutup akses ke portal sebelumnya*__
            \n
            `
        )
        .setColor('#27ae60')
        .setTimestamp()

    const embed1 = new EmbedBuilder()
        .setTitle(`🌀 **──・Game Portal・──** 🌀`)
        .setDescription(
            `
            \n
            _Selamat Datang di Game Portal, Setiap Portal disini akan membawa kamu menuju Dunia Game yang kamu pilih_
            _silahkan masuki portal dengan cara klik Icon sesuai Game yang tersedia dibawah ini :_
            \n
            \n
            <:apexlegend:1116073650328715274> <a:arrow:1118881349261070397> <@&${role.apex}>\n
            <:Valorant:1116075785489485934> <a:arrow:1118881349261070397> <@&${role.valorant}>\n
            <:Hoyoverse:1116075597395918958> <a:arrow:1118881349261070397> <@&${role.hoyo}>\n
            <:Minecraft:1116076183344390246> <a:arrow:1118881349261070397> <@&${role.minecraft}>\n
            <:DOTA2:1116075960693956749> <a:arrow:1118881349261070397> <@&${role.dota}>\n
            <:MobileLegends:1116076753899769876> <a:arrow:1118881349261070397> <@&${role.ml}>\n
            \n
            > __*Catatan, kamu hanya bisa memilih satu akses ke game yang kamu mainkan, jika mengganti role game, otomatis akan menutup akses ke game lainnya*__
            \n
            `
        )
        .setColor('#27ae60')
        .setTimestamp()

        
    const embed3 = new EmbedBuilder()
        .setTitle(`🌀 **──・Market Portal・──** 🌀`)
        .setDescription(
            `
            \n
            _Selamat Datang di **Market Portal**, jika kamu ingin mencari sesuatu untuk dibeli ataupun sekedar melihat-lihat silahkan kunjungi **Market Area**
dengan cara klik Icon dibawah ini untuk mendapat akses ke **Market Area**._
            \n
            \n
            <:Store:1116077458211471401> <a:arrow:1118881349261070397> <@&${role.market}>\n
            \n
            > __*Jika kamu berminat menjadi seller di Market Area kamu bisa melakukannya dengan cara Kontak Store Admin yang sedang aktif di dalam Market Area*__
            > __*dan pastikan benda/jasa yang kamu jual tidak melanggar syarat dan ketentuan yang ada, untuk lebih lanjut silahkan kontak Store Admin.*__
            \n
            `
        )
        .setColor('#27ae60')
        .setTimestamp()

        
    const embed4 = new EmbedBuilder()
        .setTitle("Server Verification")
        .setDescription(
        "Klik Icon Verifikasi dibawah ini agar kalian mendapatkan akses ke dalam Lounge."
        )
        .setColor('#27ae60')
        .setTimestamp()

    const embed5 = new EmbedBuilder()
        .setTitle(`⚠️ PERHATIAN ⚠️`)
        .setDescription(`_Sebelum kalian melakukan interaksi di server_
_Harap Baca **RULES & KETENTUAN** terlebih dahulu_
_dan pastikan untuk mematuhi segala hal yang tertulis didalamnya demi kenyamanan bersama._
            
_dan jangan lupa untuk baca **Penjelasan Mengenai Portal** untuk dapat mengakses berbagai macam komunitas yang telah disediakan_`
            )
        .setColor('#27ae60')
        .setTimestamp()


    message.channel.send({ embeds: [embed], components: [row1, row7] })
    message.channel.send({ embeds: [embed1], components: [row2,row3] })
    message.channel.send({ embeds: [embed3], components: [row4] })
    message.channel.send({ embeds: [embed4], components: [row5] })
    message.channel.send({ embeds: [embed5], components: [row6] })

}