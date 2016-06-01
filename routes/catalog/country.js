//var utils    = require( 'utils' );
var mongoose = require( 'mongoose' );
var Country = require('models/catalog/country').Country;
var HttpError = require('error').HttpError;

exports.getJson = function (req, res) {
    Country
    .find(function(err, countries) {
        if(err) res.send(err);

        res.json({RESULT:"OK",
            country: countries
        });
    });

}

exports.get = function (req, res) {
    Country.
    find({}).
    sort('_id').
    exec( function (err, countries) {
        if(err) return next(err);

        res.render( 'catalog/country', {
            title : 'Справочник стран',
            countries: countries
        });
    });

}

exports.addCountry = function (req, res, next) {

    if(req.body) {
      var newCountry =  Country({
         _id : req.body._id,
          desc: req.body.desc
      });

      newCountry.save(function (err) {
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
