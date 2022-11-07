import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import usersRoute from './routes/users.js';
import mealsRoute from './routes/meals.js';
import orderRoute from './routes/orders.js';

dotenv.config({path: "./.env"})

const app  = express();
const PORT = process.env.PORT;

// db connection config
const URL = process.env.MONGODBURL;
mongoose.connect(URL, {useNewUrlParser: true});
const con = mongoose.connection;
con.on('open', () => {
    console.log('db were connected...');
});

// app config
app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.APP_URL
  })
)
app.use('/users', usersRoute);
app.use('/meals', mealsRoute);
app.use('/orders', orderRoute);
app.listen(PORT, () => console.log(`${PORT}`));