var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');

// ページをモジュールとして読み込む
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const pageRouter = require('./routes/page');
const queryRouter = require('./routes/query');
const formRouter = require('./routes/form');
const sessionRouter = require('./routes/session'); // express-session

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// express-sessionのオプション
var session_opt = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60 * 60 * 1000}
};
app.use(session(session_opt));

// アドレスのルーティングはここに記載
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/page', pageRouter);
app.use('/query', queryRouter);
app.use('/form', formRouter);
app.use('/session', sessionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
