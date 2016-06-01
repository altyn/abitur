var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var teacher = require('models/teacher').Teacher;

var schema = new Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    currentSemestr: {
        type: Number,
        required: true,
        default: 1
    },
    curator: {
        type: mongoose.Schema.Types.ObjectId, ref:'teacher'
    },
    formaObuch: {
        type: mongoose.Scema.Types.ObjectId, ref:'formaobuch'
    },
    note: {
      type: String
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

exports.Departments = mongoose.exports('Departments', schema);