const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const app = express();

const indexRoutes = require('./routes/indexRoutes');
app.use('/', indexRoutes);

const logger = require('morgan');
app.use(logger('tiny'));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Home Page' });
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port: ${process.env.PORT}`);
});
