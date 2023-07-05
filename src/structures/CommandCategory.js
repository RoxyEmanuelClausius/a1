const config = require("@root/data/config");

module.exports = {
  ADMIN: {
    name: "Admin",
    image: "https://cdn.discordapp.com/emojis/1019104038660349952.png",
    emoji: "<:admin:1019104038660349952>",
  },
  ECONOMY: {
    name: "Economy",
    enabled: config.ECONOMY.ENABLED,
    image: "https://cdn.discordapp.com/emojis/1019104373181272144.png",
    emoji: "<:economy:1019104373181272144>",
  },
  FUN: {
    name: "Fun",
    image: "https://cdn.discordapp.com/emojis/1019104479448158358.png",
    emoji: "<:fun:1019104479448158358>",
  },
  INVITE: {
    name: "Invite",
    enabled: config.INVITE.ENABLED,
    image: "https://cdn.discordapp.com/emojis/1019104915420872735.png",
    emoji: "<:invite:1019104915420872735>",
  },
  INFORMATION: {
    name: "Information",
    image: "https://cdn.discordapp.com/emojis/1019107439536242779.png",
    emoji: "<:info:1019107439536242779>",
  },
  MODERATION: {
    name: "Moderation",
    enabled: config.MODERATION.ENABLED,
    image: "https://cdn.discordapp.com/emojis/1019104993581740074.png",
    emoji: "<:mod:1019104993581740074>",
  },
  OWNER: {
    name: "Owner",
    image: "https://cdn.discordapp.com/emojis/1019107926381699122.png",
    emoji: "<:owner:1019107926381699122>",
  },
  MISC: {
    name: "Misc",
    image: "https://cdn.discordapp.com/emojis/1019105562467782676.png",
    emoji: "<:utility:1019105562467782676>",
  },
};