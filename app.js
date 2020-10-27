const express = require('express');
const cors = require ('cors');
const app = express();
const PORT = 80;
const path = require ('path');

//cors for API 
app.use(cors());
app.set('trust proxy', true)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('frontend/build'))

//so I don't drive myself crazy
app.listen(PORT, function() {
    console.log(`Server listening on: ${PORT}`);
  });

//get request to show IP, simple API
app.get('/api/ip', cors(), function(req, res) {
  console.log('api request')
  res.json({ip : req.connection.remoteAddress})
})

//super basic express template, just serves react files, and has failback because wildcard
app.get('/*', cors(), function(req, res) {
    res.sendFile(path.join(__dirname, 'frontend/build/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })