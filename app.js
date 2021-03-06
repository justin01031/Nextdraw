
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , $ = require('jQuery')
  , app = express();
  

  app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  //app.use(express.bodyParser());
  app.use(express.bodyParser({
    keepExtensions: true
    , uploadDir : __dirname + '/public/upload'
  }));
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', user.index_topic);
app.get('/users', user.list);
app.get('/search',user.search);
app.get('/topic/:id', user.topic);
app.post('/topic',user.add_pop);
app.get('/newtopic', user.newtopic);
app.post('/upload/:id', user.upload);
app.post('/addtopic',user.addtopic);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
