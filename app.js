require('dotenv').config()
require('./config/database')
var createError = require('http-errors');
const cors = require('cors')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('./config/passport')// igna lo agrego a escondidas
var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize()); // igna lo agrego a escondidas
app.use('/', indexRouter);
// app.use('/users', usersRouter);

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

// socket
const http = require("http")
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server, {
  cors: {
    // origin: "https://my-tynerary-front-dreamjuan.herokuapp.com",
    methods: ["GET","POST"],
  }
});

io.on("connection",(socket)=>{
  console.log(`User connected: ${socket.id}`)

  socket.on("join_room",(data)=>{
    socket.join(data)
    console.log(`User with ID: ${socket.id} joined room: ${data}`)
  })

  socket.on("send_message",(data) =>{
    socket.to(data.room).emit("receive_message",data)
  })

  socket.on("disconnect", ()=>{
    console.log("user disconnected", socket.id)
  })
})



// server.listen("https://my-tinerary-dreamjuan-back.herokuapp.com", ()=> console.log("socket on"))

module.exports = app;
