var mongoose = require( 'mongoose' );
var Nationality = require('models/catalog/nationality').Nationality;


exports.getJson = function(req, res){
    Nationality.find(function(err, items) {
        if(err) res.send(err);
        res.status(200);
        res.set('Content-Type', 'application/json');
        res.json(items);
    });

}

exports.get = function (req, res) {
    Nationality.
    find({}).
    sort('_id').
    exec( function (err, nationality) {
        if(err) return next(err);

        res.render( 'catalog/nationality', {
            title : 'Национальность',
            nationality: nationality
        });
    });

}

exports.addNationality = function (req, res, next) {
    if(req.body) {
        var newNationality =  Nationality({
            _id : req.body._id,
            desc: req.body.desc
        });

        newNationality.save(function (err) {
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