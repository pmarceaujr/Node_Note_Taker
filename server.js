// Required modules, packages, etc
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Create the express server
const app = express();

//Set the listener port (use the Heroku provided or the default of 8080)
const PORT = process.env.PORT || 8080;

//linking public folder to attain data inside for this application
app.use(express.static("public"));

// Parse incoming string or array data and the JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes needed to handle the user requests
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// LISTENER: Let's us know the server is running
app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});