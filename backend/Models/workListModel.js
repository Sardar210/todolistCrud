const mongoose = require('mongoose')

const workListSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required:[true, 'Please enter your name']
        },
        day: {
            type: String,
            required:true,
            default: 0
        },
        work: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

const Worklist = mongoose.model('Worklist', workListSchema);

module.exports = Worklist;