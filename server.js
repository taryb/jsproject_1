const express = require('express');
const app = express();
const routes = require('./routes');

// set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use the routes defined in routes.js
app.use('/', routes);

// start the server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
