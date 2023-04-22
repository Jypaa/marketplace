const express = require('express');
const storeRouter = require('./routes/store');
const users = require('./routes/users');
const cors = require('cors');

const app = express();

app.use(cors({
      origin: [
        'http://localhost:5173',
      ] 
}));

app.use(express.json());
app.use('/api/store', storeRouter);
app.use('/api/users', users);

module.exports = app;
