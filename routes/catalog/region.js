var mongoose = require( 'mongoose' );
var async = require('async');
var Region = require('models/catalog/region').Region;
var Country = require('models/catalog/country').Country;


exports.getJson = function(req, res){
    Region.find(function(err, regions) {
        if(err) res.send(err);
        res.status(200);
        res.set('Content-Type', 'application/json');
        res.json(regions);
    });

}

exports.get = function (req, res) {

    var new_region;

    new_region = {};

    async.parallel({
        countries: function (callback) {
            return Country.find({}).sort('_id').exec( function (err, result) {
                if(err) return (err);
                return callback(err, result);
            });
        },
        regions: function (callback) {
            return Region.find({}).sort('_id').exec( function (err, result) {
                if(err) return (err);
                return callback(err, result);
            });
        },

    }, function(err, new_region){
        res.render( 'catalog/region', {
            title : 'Области',
            new_region: new_region

        });
    });


}

exports.addRegion = function (req, res, next) {

    if(req.body) {
        var newRegion =  Region({
            _id : req.body._id,
            desc: req.body.desc,
            country: req.body.country
        });

        newRegion.save(function (err) {
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