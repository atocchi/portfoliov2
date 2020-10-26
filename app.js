const express = require('express');
const app = express();
const PORT = 80;
const path = require ('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('frontend/build'))

//so I don't drive myself crazy
app.listen(PORT, function() {
    console.log(`Server listening on: :${PORT}`);
  });

//super basic express template, just serves react files, and has failback because wildcard
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'frontend/build/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })