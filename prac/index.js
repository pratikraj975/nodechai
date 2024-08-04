require('dotenv').config();

//import express from "express";
const express = require("express");

const app = express();
 const port = 3000;

app.get('/', (req, res) => {
  res.send('Helll World!');
});

app.listen(process.env.port, () => {
  console.log(`Server is running on port ${port}`);
}).on('error', (err) => {
  console.error(`Error starting server: ${err.message}`);
});