const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

var indexRouter = require('./routes/index.js');

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`Listening on port ${port}`);