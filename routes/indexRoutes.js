const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  res.status(201).json({ message: 'this is router page' });
});

module.exports = route;
