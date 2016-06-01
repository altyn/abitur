/**
 * Module dependencies.
 */
var http = require('http');
var path = require('path');
var express = require('express');

var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var config = require('./config');
var log = require('./libs/log')(module);
var errorHandler = require('express-error-handler');
var mongoose = require('./libs/mongoose');
var HttpError = require('./error').HttpError;

var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/public/img/favicon/favicon-32x32.png'));         //favicon.ico
app.use(methodOverride());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(({ extended: true })));

app.use(cookieParser());  // req.cookies

var MongoStore = require('connect-mongo')(session);
app.use(session({
                  resave: true,
                  saveUninitialized: true,
                  secret: config.get('session:secret'),
                  key: config.get('session:key'),
                  cookie: config.get('session:cookie'),
                  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

if (app.get('env') == 'development') {
  app.use(logger('dev')); //res.end
} else {
  app.use(logger('default'));
}

app.use(require('middleware/sendHttpError'));
app.use(require('middleware/loadUser'));

var upload = multer({ dest: './uploads'});
app.use(express.static(path.join(__dirname, 'public')));

//app.use(app.router);

require('routes') (app);



// Обработчик ошибок
app.use(function(err, req, res, next){
  if(typeof err == 'number'){
      err = new HttpError(err)
  }

  if(err instanceof HttpError) {
    res.sendHttpError(err);
  } else {
    if (app.get('env') == 'development') {
      errorHandler()(err, req, res, next);
    } else {
      log.error(err);
      err = new HttpError(500);
      res.sendHttpError(err);
    }
  }

});

// Старт сервера
http.createServer(app).listen(config.get('port'), function(){
  //log.info('Express server listening on port ' + config.get('port'));
  console.log('Express server listening on port ' + config.get('port'));
});