const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const emailRoute = require('./routes/emailRoute');

const app = express();
mongoose.Promise = global.Promise;

app.set('trust proxy', true);

let PORT, mongoStr;
if (process.env.NODE_ENV === 'production') {
  require('dotenv').config();
  PORT = process.env.PORT;
  mongoStr = `mongodb+srv://${process.env.mongouser}:${process.env.mongopass}@${process.env.mongoConnect}?retryWrites=true&w=majority`;

  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}
else {
  const config = require('./devconfig');
  PORT = 5000;
  mongoStr = `mongodb+srv://${config.mongouser}:${config.mongopass}@${config.mongoConnect}?retryWrites=true&w=majority`;
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
app.use(`/api`, emailRoute);

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`)
});
