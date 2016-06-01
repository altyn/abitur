var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var color = '#d7cc28 #ff00ff #ffff00 #00ccff #ff0000'.split(' ');

var schema = new Schema({
    _abiturId: {
        type: Number, ref:'Abiturient'
    },
    code: {
        type: String
    },
    color: {
        type: String,
        enum: color
    },
    mainPoint: {
        type: Number
    },
    subjectPoint: {
        type: Number
    }

});

exports.AbiturientOrt = mongoose.exports('AbiturientOrt', schema);