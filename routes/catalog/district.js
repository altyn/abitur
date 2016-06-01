var mongoose = require( 'mongoose' );
var District = require('models/catalog/district').District;
var HttpError = require('error').HttpError;

exports.getJson = function (req, res) {
    District
        .find(function(err, districts) {
            if(err) res.send(err);

            res.json({RESULT:"OK",
                districts: districts});
        });

}

exports.get = function (req, res) {
    District.
        find({}).
        sort('_id').
        exec( function (err, districts) {
            if(err) return next(err);

            res.render( 'catalog/district', {
                title : 'Справочник регионов',
                districts: districts
            });
        });

}

exports.addDistrict = function (req, res, next) {

    if(req.body) {
        var newDistrict =  District({
            _id : req.body._id,
            desc: req.body.desc
        });

        newDistrict.save(function (err) {
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
