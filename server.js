// Include dependencies & define PORT
const express = require('express');
const app = express ();
const PORT = process.env.PORT || 3001;

// Routers
const apiRouter = require('./routes/apiRoutes');
const htmlRouter = require('./routes/htmlRoutes');

// To handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware
app.use(express.static('public'));
app.use(express.static('db'));
app.use(apiRouter);
app.use(htmlRouter);

// PORT check
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);