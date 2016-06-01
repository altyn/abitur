var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    short: {
        type: String,
        default: 'N/A'
    }
});

exports.AcademicDegree = mongoose.model('AcademicDegree', schema);