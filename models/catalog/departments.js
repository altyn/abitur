var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var teacher = require('models/teacher/teacher').Teacher;

var schema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    header: {
        type: mongoose.Schema.Types.ObjectId, ref:'teacher'
    },
    assistant: {
        type: mongoose.Schema.Types.ObjectId, ref: 'teacher'
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    }
});

exports.Departments = mongoose.model('Departments', schema);