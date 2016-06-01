//var utils    = require( 'utils' );
var mongoose = require( 'mongoose' );
var Sostobuch = require('models/catalog/sostObuch').Sostobuch;

exports.get = function (req, res) {
    Sostobuch.
    find({}).
    sort('_id').
    exec( function (err, sostobuch) {
        if(err) return next(err);

        res.render( 'catalog/sostobuch', {
            title : 'Состояние обучения',
            sostobuch: sostobuch
        });
    });

}

exports.addSostobuch = function (req, res, next) {

        if(req.body) {
            var  newSostobuch =  Sostobuch({
                _id : req.body._id,
                desc: req.body.desc
            });

            newSostobuch.save(function (err) {
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