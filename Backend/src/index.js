const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    await connectDB();
    res.status(200).send({message: "Welcome to this api", status:true});
});


module.exports = app;
