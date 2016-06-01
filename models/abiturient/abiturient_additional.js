var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    _abiturId: {
        type: Number, ref:'Abiturient'
    },
    department: {
        type: Number, ref:'Departments'
    },
    passport: {
        type: Number, ref:''
    },
    attestat: {
        type: Number, ref:''
    },
    diplom: {
        type: Number, ref:''
    },
    ort: {
        type: Number, ref:'AbiturientOrt'
    },
    formaobuch: {
        type: Number, ref:'Formaobuch'
    },
    educationDegree: {
        type: Number, ref:'EducationDegree'
    }

});

exports.AbiturientAdditional = mongoose.exports('AbiturientAdditional', schema);