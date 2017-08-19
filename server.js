app = require('./express_middleware.js').app;

const port = process.env.PORT || 3000;

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

app.get('/projects', (request, response) => {
  response.render('projects.hbs', {
    pageTitle: 'Projects'
  });
});

app.get('/bad', (request, response) => {
  response.send({
    code: 400,
    errorMessage: 'Bad request'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
