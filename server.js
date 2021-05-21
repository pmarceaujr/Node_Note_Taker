// Required modules, packages, etc
const express = require('express');

//Create the express server
const app = express();

//Set the listener port (use the Heroku provided or the default of 8080)
const PORT = process.env.PORT || 8080;



// LISTENER: Let's us know the server is running
app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});