const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes=require('./routes/blogRoutes')
const dotenv=require('dotenv').config();


const app = express();


  
mongoose
  .connect(process.env.ENV)
  .then((result) => {
    console.log("Connected to DB");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");



app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use(blogRoutes);

app.use((req, res) => {
  res.status(404).render("404");
});



