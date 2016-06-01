var mongoose = require( 'mongoose' );
var Zachislenie = require('models/catalog/zachislenie').Zachislenie;


exports.get = function (req, res) {
    Zachislenie.
    find({}).
    sort('_id').
    exec( function (err, zachislenies) {
        if(err) return next(err);

        res.render( 'catalog/zachislenie', {
            title : 'Условия зачисления',
            zachislenies: zachislenies
        });
    });

}

exports.addZachislenie = function (req, res, next) {

    if(req.body) {
        var newZachislenie =  Zachislenie({
            _id : req.body._id,
            desc: req.body.desc
        });

        newZachislenie.save(function (err) {
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