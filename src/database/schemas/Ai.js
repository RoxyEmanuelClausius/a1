const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
    {
        idboss: Number,
        userId: String,
        name: String,
        stats: {
            attack: Number,
            health: Number,
        },
        reward: {
            box: Number,
            cash: Number
        }
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

module.exports = mongoose.model('Ai', Schema)
