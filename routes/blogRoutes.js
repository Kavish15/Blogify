const express=require('express');
const blogController=require('../controllers/blogController')
const Blog = require("../models/blog");

const router=express.Router();

router.get("/blogs", blogController.blog_index)
  
  router.post("/blogs",blogController.blog_details)
    // req.body
  
  router.get("/blogs/create", (req, res) => {
    // res.sendFile('./views/about.html',{root:__dirname});
    res.render("create");
  });
  
  router.get("/blogs/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    Blog.findById(id)
      .then((result) => {
        res.render("details", { blog: result });
      })
      .catch((err) => res.status(404).render("404"));
  });
  
  router.delete("/blogs/:id", (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch(err=>{

      console.log(err)
    })
  });

  module.exports=router;
  