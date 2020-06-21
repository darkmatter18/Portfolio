/**
 Copyright 2020 Arkadip Bhattacharya

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const rateLimit = require("express-rate-limit")

const testRoute = require('./routes/testRoute')
const emailRoute = require('./routes/emailRoute')
const authRoute = require('./routes/authRoute')

const app = express()
app.set('trust proxy', true)

app.use(cors({
  origin: ['https://www.arkadip.co', 'https://arkadip.co', 'https://admin.arkadip.co'],
  optionsSuccessStatus: 200
}));

app.use(rateLimit());

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

let mongoStr;
if (process.env.NODE_ENV === 'production') {
  require('dotenv').config();
  mongoStr = `mongodb+srv://${process.env.mongouser}:${process.env.mongopass}@${process.env.mongoConnect}?retryWrites=true&w=majority`;
}
else {
  const config = require('../devconfig');
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



//IMPORT ROUTES
app.use(`/email`, emailRoute)
app.use(`/i`, authRoute)
app.use(`/test`, testRoute)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`)
});
