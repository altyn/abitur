var checkAuth = require('middleware/checkAuth');

module.exports = function(app) {

  app.get('/', checkAuth, require('./frontpage').get);

  app.get('/login', require('./login').get);
  app.post('/login', require('./login').post);

  app.post('/logout', require('./logout').post);

  app.get('/chat', checkAuth, require('./chat').get);

  app.get('/teachers', checkAuth,  require('./teachers').get);

  app.get('/acdegree', checkAuth, require('./catalog/academicdegree').get);
  app.post('/acdegree', checkAuth, require('./catalog/academicdegree').addAcDegree);

  app.get('/actitle', checkAuth, require('./catalog/academictitle').get);
  app.post('/actitle', checkAuth, require('./catalog/academictitle').addAcTitle);

  app.get('/formaobuch', checkAuth, require('./catalog/formaobuch').get);
  app.post('/formaobuch', checkAuth, require('./catalog/formaobuch').addFormaobuch);

  app.get('/jobstatus', checkAuth, require('./catalog/jobstatus').get);
  app.post('/jobstatus', checkAuth, require('./catalog/jobstatus').addJobstatus);

  //app.post('/v1/api/nationality', /*checkAuth,*/ require('./catalog/nationality').getJson);
  //app.get('/v1/api/nationality', /*checkAuth,*/ require('./catalog/nationality').getJson);

  app.get('/nationality', checkAuth, require('./catalog/nationality').get);
  app.post('/nationality', checkAuth, require('./catalog/nationality').addNationality);

  app.get('/v1/api/position', /*checkAuth,*/ require('./catalog/position').getJson);
  app.get('/position', checkAuth, require('./catalog/position').get);
  app.post('/position', checkAuth, require('./catalog/position').addPosition);

  app.get('/v1/api/country', /*checkAuth,*/ require('./catalog/country').getJson)
  app.get('/country', checkAuth, require('./catalog/country').get);
  app.post('/country', checkAuth, require('./catalog/country').addCountry);

  app.get('/district', checkAuth, require('./catalog/district').get);
  app.post('/district', checkAuth, require('./catalog/district').addDistrict);

  app.get('/region', checkAuth, require('./catalog/region').get);
  app.post('/region', checkAuth, require('./catalog/region').addRegion);

  app.get('/zachislenie', checkAuth, require('./catalog/zachislenie').get);
  app.post('/zachislenie', checkAuth, require('./catalog/zachislenie').addZachislenie);

  app.get('/sostobuch', checkAuth, require('./catalog/sostobuch').get);
  app.post('/sostobuch', checkAuth, require('./catalog/sostobuch').addSostobuch);

  app.get('/abiturients', checkAuth, require('./abiturient').get);

  app.get('/departments', checkAuth, require('./catalog/departments').get);

};