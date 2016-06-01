//var utils    = require( 'utils' );
var mongoose = require( 'mongoose' );
var Departments = require('models/catalog/departments').Departments;
var HttpError = require('error').HttpError;

exports.getJSON = function (req, res) {
    Departments
        .find(function(err, departments) {
            if(err) res.send(err);

            res.json({RESULT:"OK",
                department: departments});
        });

}

exports.get = function (req, res) {
    Departments.
        find({}).
        sort('_id').
        exec( function (err, departments) {
            if(err) return next(err);

            res.render( 'departments', {
                title : 'Список подразделений',
                department: departments
            });
        });

}

//exports.addDepartment = function (req, res, next) {
//
//    if(req.body) {
//        var newDepartment =  Departments({
//            _id : req.body._id,
//            desc: req.body.desc
//        });
//
//        newDepartment.save(function (err) {
//            if (err) {
//                console.error(err);
//                next(err);
//            } else {
//                res.status(200).send('Данные успешно добавлены!');
//            }
//
//        });
//    } else {
//        next(new HttpError('Нет данных!'));
//    }
//}
