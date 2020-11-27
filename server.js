// import express

const express = require("express");

//init express
const app = express();

//creation endpoint

/*app.get("/", (req, res) => {
  res.send("hello");
});*/

//run server

app.listen(7000, (err) => {
  err ? console.log(err) : console.log("the server is runnig");
});

//server static file 

app.use(express.static("public"))

const validateTime = require("./middleware/validateTime");
app.use(express.json());
app.use(validateTime);
