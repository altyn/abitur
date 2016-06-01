var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    _abiturId: {
        type: Number, ref:'Abiturient'
    },
    country: {
        type: mongoose.Schema.Types.ObjectId, ref:'country'
    },
    region: {
        type: String,
        required: true
    },
    district: {
      text: String
    },
    city: {
        type: String,
        required: true
    },
    homeAddress: {
        type: String,
        required: true
    }

});

exports.AbiturientAddress = mongoose.exports('AbiturientAddress', schema);