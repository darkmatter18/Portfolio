const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const emailRoute = require('./routes/emailRoute');
const config = require('./config');

// IMPORT MODELS
//require('./models/Product');


const app = express();
mongoose.Promise = global.Promise;

let PORT, mongoStr;
if (process.env.NODE_ENV === 'production') {
  PORT = process.env.PORT;
  mongoStr = `mongodb+srv://${process.env.mongouser}:${process.env.mongopass}@${process.env.mongoConnect}?${process.env.mongoQuery1}&${process.env.mongoQuery2}`;

  app.use(express.static('public'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  })
}
else {
  PORT = 5000;
  mongoStr = `mongodb+srv://${config.mongouser}:${config.mongopass}@${config.mongoConnect}?${config.mongoQuery1}&${config.mongoQuery2}`;
}

//Mongodb connect
mongoose.connect(mongoStr, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Connected with mongoDB cluster")
  })
  .catch((e) => {
    console.log("Failed to connect with MongoDB cluster");
    console.log(e);
  });


app.use(bodyParser.json());

//IMPORT ROUTES
app.use(`/api`, emailRoute)



app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`)
});