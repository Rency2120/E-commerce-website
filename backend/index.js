const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const loginRoute = require('./routes/loginRoute')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/CartDatabase");
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
  mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB:', err);
  });

app.use("/abc",loginRoute)

app.listen(8000, ()=>{
    console.log("server is running");
})
