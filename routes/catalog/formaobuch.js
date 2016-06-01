var mongoose = require( 'mongoose' );
var Formaobuch = require('models/catalog/formaobuch').Formaobuch;


exports.get = function (req, res) {
    Formaobuch.
    find({}).
    sort('_id').
    exec( function (err, formaobuch) {
        if(err) return next(err);

        res.render( 'catalog/formaobuch', {
            title : 'Форма обучения',
            formaobuch: formaobuch
        });
    });

}

exports.addFormaobuch = function (req, res, next) {

    if(req.body) {
        var newFormaobuch =  Formaobuch({
            _id : req.body._id,
            desc: req.body.desc
        });

        newFormaobuch.save(function (err) {
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