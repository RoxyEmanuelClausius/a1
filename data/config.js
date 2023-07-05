module.exports = {
  OWNER_IDS: process.env.OWNER_IDS, // Bot owner ID's
  PREFIX: "!", // Default prefix for the bot
  SUPPORT_SERVER: "", // Your bot support server
  
  INTERACTIONS: {
    SLASH: true, // Should the interactions be enabled
    CONTEXT: true, // Should contexts be enabled
    GLOBAL: false, // Should the interactions be registered globally
    TEST_GUILD_ID: "1015251532683431936", //1015251532683431936", // Guild ID where the interactions should be registered. [** Test you commands here first **]
  },
  
    
    "CHANNEL_WELCOME": "11138431246440530011",
    "ROLES_WELCOME": ["",""],
  
  CHANNEL_WELCOME: '11138412464440530011',
  WELCOMECH: '11138412464405304011', // id channel to set welcome canvas image
  WELCOMEIMG: 'https://cdn.discordapp.com/attachments/1046840055295127723/1119643644169826494/Welcome_uverseni.png',

  role: {
    japan: "1113874223564341299", // id role 
    vtuber: "1114234080909869196",
    korea: "1121004905591742536",
    public: "1120990429106675782",
    verify: "1113969416015724576",

    apex: "1113928945616822392", //human
    valorant: "1113923171725357117", //elf
    hoyo: "1113875151700897872", //beast
    minecraft: "1113901746411032691", //demon
    dota: "1116045747259981824",
    osu: "1116048454691590145",
    ml: "1113889090300026952",
    verify: "1113969416015724576",
    market: "1114292918765752571",
    health: "1125332355918352464",

    

  },
  
  INVITECH: '1113898592982278224', // id channel to set logs invite trackers

  EMBED_COLORS: {
    BOT_EMBED: "#fff900",
    TRANSPARENT: "#637cae",
    SUCCESS: "#06f49f",
    ERROR: "#D61A3C",
    WARNING: "#F7E919",
  },
  CACHE_SIZE: {
    GUILDS: 100,
    USERS: 1000000,
    MEMBERS: 1000000,
  },
  MESSAGES: {
    API_ERROR: "Unexpected Backend Error! Try again later or contact support server",
  },

  // PLUGINS

  EMOJI: {
    LEAVE: "<:leave:1026676260086226986>",
    JOIN: "<:join:1026676262745428089>"
  },

  ECONOMY: {
    ENABLED: true,
    DAILY_COINS: 2, // coins to be received by daily command
    MIN_WORK_AMOUNT: 1, // minimum coins to be received when work command is used
    MAX_WORK_AMOUNT: 3, // maximum coins to be received when work command is used
    MIN_CRIME_AMOUNT: 2, // minimum coins to be received when work command is used
    MAX_CRIME_AMOUNT: 5, // maximum coins to be received when beg command is used
    LEVEL_UP: 2,
  },

  IMAGE: {
    BASE_API: "https://image-api.strangebot.xyz",
  },

  INVITE: {
    ENABLED: true,
  },

  MODERATION: {
    ENABLED: true,
    EMBED_COLORS: {
      TIMEOUT: "#102027",
      UNTIMEOUT: "#4B636E",
      KICK: "#FF7961",
      SOFTBAN: "#AF4448",
      BAN: "#D32F2F",
      UNBAN: "#00C853",
      VMUTE: "#102027",
      VUNMUTE: "#4B636E",
      DEAFEN: "#102027",
      UNDEAFEN: "#4B636E",
      DISCONNECT: "RANDOM",
      MOVE: "RANDOM",
    },
  },
 
  PRESENCE: {
    ENABLED: false, // Whether or not the bot should update its status
    STATUS: "online", // The bot's status [online, idle, dnd, invisible]
    //TYPE: "PLAYING", // Status type for the bot [PLAYING | LISTENING | WATCHING | COMPETING]
    //MESSAGE: "{members} users", // Your bot status message use : {members} or {servers}
  },

  STATS: {
    ENABLED: false,
    XP_COOLDOWN: 10, // Cooldown in seconds between messages
    DEFAULT_LVL_UP_MSG: `Congrats <@{member:id}>,\nYou just advanced to Level \`{level}\` and got \`{level}\` currencys.`,
  },
}


