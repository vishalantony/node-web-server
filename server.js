app = require('./express_middleware.js').app;

app.get('/', (request, response) => {
  // response.send('<h1>Hello from Express!</h1>');
  // response.send({
  //   name: 'Vishal',
  //   languages: [
  //     'C', 'C++', 'JavaScript', 'Ruby'
  //   ]
  // });
  response.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome to the matrix!'
  })
});

app.get('/about', (request, response) => {
  response.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/bad', (request, response) => {
  response.send({
    code: 400,
    errorMessage: 'Bad request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
