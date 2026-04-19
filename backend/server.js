import app from './app.js';
import connectDB from './config/db.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;
connectDB();

app.listen(port, () => {
  console.log(`server is on ${port}`);
});
