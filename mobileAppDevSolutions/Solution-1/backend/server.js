// Placeholder for Node.js + Express backend (Solution 1)
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Backend is working!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
