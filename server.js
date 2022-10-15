const express = require('express');
const PORT = 3001;
const app = express();
const path = require('path');

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
});

app.get('/bartools', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/html/bartools.html'));
});

app.get('/alcohol', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/html/alcohol.html'));
});

app.get('/recipes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/html/recipes.html'));
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);