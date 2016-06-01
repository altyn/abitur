
var mongoose = require( 'mongoose' );
var AcademicTitle = require('models/catalog/academicTitle').AcademicTitle;


exports.get = function (req, res) {
    AcademicTitle.
    find({}).
    sort('_id').
    exec( function (err, acTitle) {
        if(err) return next(err);

        res.render( 'catalog/acTitle', {
            title : 'Ученое звание',
            acTitle: acTitle
        });
    });

}

exports.addAcTitle = function (req, res, next) {

    if(req.body) {
        var newActitle =  AcademicTitle({
            _id : req.body._id,
            desc: req.body.desc
        });

        newActitle.save(function (err) {
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