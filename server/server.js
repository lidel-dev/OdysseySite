const express = require('express')
const cors = require('cors')
const path = require('path');

const app = express()
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors()) //enable CORS
app.use(express.json()) //enable JSON

//Add Routes Here
//example route!
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

//Start the server
app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}`))

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back the React app.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});
