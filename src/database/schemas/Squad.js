const mongoose = require('mongoose')

const squadSchema = mongoose.Schema({
    squadName: String,
    squadXp: Number,
    leader: Array,
    maxSquad: Number,
    member: Array,
    squadbank: Number,
    logo: String,
    squad: {
        squadattack: Number,
        squadhealth: Number,
        squaddefense: Number,
    },
})

module.exports = mongoose.model('Squad', squadSchema)