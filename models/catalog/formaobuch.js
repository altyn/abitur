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
    }
});

exports.Formaobuch = mongoose.model('Formaobuch', schema);