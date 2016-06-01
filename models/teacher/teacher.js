var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var genders = 'муж жен'.split(' ');

var schema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    surname: {
            type: String
    },
    name: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    birthDay: {
        type: Date,
        required: true,
    },
    sex: {
        type: String,
        enum: genders
    },
    email: {
        type: String,
    },
    address: {
        type: mongoose.Schema.Types.ObjectId, ref:'TeacherAddress'
    }


});

exports.Teacher = mongoose.model('Teacher', schema);