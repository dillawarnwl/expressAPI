const express = require('express');
const app = express();
const itemsRouter = require('./routes/items');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);

app.use('/items', itemsRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Express API');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = app;
