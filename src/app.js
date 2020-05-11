const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors= require('cors');

const postRoute= require('./routes/postRoute');

const app= express();
app.use(cors);
app.use(bodyParser.json());


//connecting to mongoose cluster
mongoose.connect('mongodb+srv://purity:RrWs8bKSsOhTgv9p@backend-i5epy.mongodb.net/test?retryWrites=true&w=majority')
.then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

  app.use('/api/posts',postRoute);


export default app;
