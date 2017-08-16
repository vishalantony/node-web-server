const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials'); // add support for using partials
app.set('view engine', 'hbs');


// app.use is for registering a middleware
app.use((req, res, next) => {
  var now = new Date().toString();
  const log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log+"\n", (err) => {
    if (err) {
      console.log('Unable to append to server.log');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

// registering helper (current year helper)
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

module.exports = {
  app
}
