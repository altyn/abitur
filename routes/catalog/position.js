var mongoose = require( 'mongoose' );
var Position = require('models/catalog/position').Position;

exports.getJson = function(req, res){
    Position.find(function(err, positions) {
        if(err) res.send(err);
        res.status(200);
        res.set('Content-Type', 'application/json');
        res.json(positions);
    });

}

exports.get = function (req, res) {
    Position.
    find({}).
    sort('_id').
    exec( function (err, positions) {
        if(err) return next(err);

        res.render( 'catalog/position', {
            title : 'Должность',
            positions: positions
        });
    });

}

exports.addPosition = function (req, res, next) {

    if(req.body) {
        var newPosition =  Position({
            _id : req.body._id,
            desc: req.body.desc
        });

        newPosition.save(function (err) {
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