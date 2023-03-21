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

const zooQuesDb = mongoose.model('zoology',questionSchema);

module.exports = zooQuesDb;