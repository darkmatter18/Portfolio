const express = require('express');
const bodyParser = require('body-parser');
const emailRoute =  require('./routes/emailRoute');
//const mongoose = require('mongoose');

// IMPORT MODELS
//require('./models/Product');


const app = express();
const PORT = process.env.PORT || 5000;

//mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`);

app.use(bodyParser.json());

//IMPORT ROUTES
app.use(`/api`, emailRoute)


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  })

}

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`)
});