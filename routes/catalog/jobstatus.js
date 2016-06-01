
var mongoose = require( 'mongoose' );
var Jobstatus = require('models/catalog/jobStatus').JobStatus;


exports.get = function (req, res) {
    Jobstatus.
    find({}).
    sort('_id').
    exec( function (err, jobstatus) {
        if(err) return next(err);

        res.render( 'catalog/jobStatus', {
            title : 'Статус ППС',
            jobstatus: jobstatus
        });
    });

}

exports.addJobstatus = function (req, res, next) {

    if(req.body) {
        var newJobstatus =  Jobstatus({
            _id : req.body._id,
            desc: req.body.desc
        });

        newJobstatus.save(function (err) {
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