const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes=require('./routes/blogRoutes')


const app = express();

const dbURI =
  "mongodb+srv://blogify:test1234@cluster0.ib1ak4i.mongodb.net/node-tuts?retryWrites=true&w=majority";
  
mongoose
  .connect(dbURI)
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



