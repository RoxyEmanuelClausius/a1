const mongoose = require("mongoose");
const { log, success, error } = require("../helpers/Logger");

module.exports = {
  async initializeMongoose() {
    log(`Connecting to MongoDb...`);

    try {
      await mongoose.connect(process.env.MONGO_CONNECTION, {
        keepAlive: true,
      });

      success("Mongoose: Connected");
    } catch (err) {
      error("Mongoose: Failed to connect to database", err);
      process.exit(1);
    }
  },

  schemas: {
    Guild: require("./schemas/Guild"),
    Member: require("./schemas/Member"),
    Stats: require('./schemas/Stats'),
    Player: require("./schemas/Player"),
    Ai: require('./schemas/Ai'),
    ModLog: require("./schemas/ModLog").model,
  },
};
