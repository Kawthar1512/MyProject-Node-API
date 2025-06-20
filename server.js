const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

let quotes = [];

fs.readFile('./quotes.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading quotes:', err);
    return;
  }
  quotes = JSON.parse(data);
});

// Route to serve a random quote
app.get('/api/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
