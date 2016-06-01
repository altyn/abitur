var mongoose = require( 'mongoose' );
var async = require('async');
var Country = require('models/catalog/country').Country;
var District = require('models/catalog/district').District;
var Nationality = require('models/catalog/nationality').Nationality;
var Department = require('models/catalog/departments').Departments;
var Formobuch = require('models/catalog/formaobuch').Formaobuch;
var AcDegree = require('models/catalog/academicDegree').AcademicDegree;
var HttpError = require('error').HttpError;

//Formobuch.find({}).sort('_id').exec( function (err, formobuchs) {
//    if(err) return(err);
//    forobuchArray = formobuchs;
//});
//
//Edudegree.find({}).sort('_id').exec( function (err, edudegrees) {
//    if(err) return(err);
//    edudegreeArray = edudegrees;
//});

exports.get = function (req, res) {

    var new_abiturient;

    new_abiturient = {};

    async.parallel({
        countries: function (callback) {
            return Country.find({}).sort('_id').exec( function (err, result) {
                if(err) return (err);
                return callback(err, result);
            });
        },
        districts: function (callback) {
            return District.find({}).sort('_id').exec( function (err, result) {
                if(err) return(err);
                if (!result){
                    result === 'No districts';
                    return callback(err, result);
                } else {
                    return callback(err, result);
                }

            });
        },
        nationalities: function (callback) {
            return Nationality.find({}).sort('_id').exec( function (err, result) {
                if (err) return (err);
                return callback(err, result);
            });
        },
        //departments: function (callback) {
        //    return Department.find({}).sort('_id').exec( function (err, result) {
        //        if(err) return(err);
        //        return callback(err, result);
        //    });
        //},
        formobuchs: function (callback) {
            return Formobuch.find({}).sort('_id').exec( function (err, result) {
                if(err) return(err);
                return callback(err, result)
            });
        },
        academicdegree: function (callback) {
            return AcDegree.find({}).sort('_id').exec( function (err, result) {
                if(err) return(err);
                return callback(err, result);
            });
        }

    }, function(err, new_abiturient){
        res.render( 'abiturient/abiturienty_new', {
                title : 'Создать абитуриента',
                new_abiturient: new_abiturient
            });
    });
}