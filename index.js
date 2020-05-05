const express = require('express');
const path = require('path');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static folder
app.use(express.static(path.join(__dirname, 'dist')));

const homePage = require('./backend/routes/home');
const userRoute = require('./backend/routes/api/user');
const transportRoute = require('./backend/routes/api/transport');

app.use('/api/user', userRoute);
app.use('/api/transport', transportRoute);
app.use('/', homePage);

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log('app open on port :::::: ', port);
});

// export the server object
module.exports = server;
