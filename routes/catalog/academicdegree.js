var mongoose = require( 'mongoose' );
var AcademicDegree = require('models/catalog/academicDegree').AcademicDegree;


exports.get = function (req, res) {
    AcademicDegree.
    find({}).
    sort('_id').
    exec( function (err, acDegree) {
        if(err) return next(err);

        res.render( 'catalog/acDegree', {
            title : 'Ученая степень',
            acDegree: acDegree
        });
    });

}

exports.addAcDegree = function (req, res, next) {

    if(req.body) {
        var newAcdegree =  AcademicDegree({
            _id : req.body._id,
            desc: req.body.desc,
            short: req.body.short
        });

        newAcdegree.save(function (err) {
            if (err) {
                console.error(err);
                next(err);
            } else {
                res.status(200).send('Данные успешно добавлены!');
            }

        });
    } else {
        next(new HttpError('Нет данных!'));
    }
}