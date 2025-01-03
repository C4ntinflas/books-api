const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.use('/api/books', bookRoutes);

module.exports = app;