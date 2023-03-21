const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    pqid:{
        type: Number,
        required: true
    },
    question:{
        type: String,
        required: true
    },
    answers:{
        type: [String],
        required: true
    }
})

const chemQuesDb = mongoose.model('chemistry',questionSchema);

module.exports = chemQuesDb;