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

const matQuesDb = mongoose.model('maths',questionSchema);

module.exports = matQuesDb;