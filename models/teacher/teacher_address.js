var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    _teacherId: {
        type: Number, ref:'Teacher'
    },
    country: {
        type: mongoose.Schema.Types.ObjectId, ref:'country'
    },
    region: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    homeAddress: {
        type: String,
        required: true
    },
    actualAddress: {
        type: String,
        required: true
    }

});

exports.TeacherAddress = mongoose.exports('TeacherAddress', schema);