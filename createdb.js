var mongoose = require('./libs/mongoose');
mongoose.set('debug', true);
var async = require('async');

async.series([
    open,
    dropDatabse,
    requireModels,
    createUsers
], function(err, results) {
    console.log(arguments);
    mongoose.disconnect();
    process.exit( err ? 255 : 0);
});

function open(callback){
    mongoose.connection.on('open', callback);
}

function dropDatabse(callback){
    var db = mongoose.connection.db;
    db.dropDatabase(callback);
}

function requireModels (callback) {
    require('./models/user');

    async.each(Object.keys(mongoose.models), function (modelName, callback) {
        mongoose.models[modelName].ensureIndexes(callback);
    }, callback);
}

function createUsers(callback){

    var users = [
        {username: 'admin', password: 'admin'},
        {username: 'admin', password: 'admin'},
        {username: 'redactor', password: 'redactor'},
        {username: 'tester', password: 'tester'}
    ];

    async.each(users, function (userData, callback) {
        var user = new mongoose.models.User(userData);
        user.save(callback);
    }, callback);


}