const Blog = require("../models/blog");

const blog_index=(req,res)=>{
    Blog.find()
      .sort({ createdAt: -1 })
      .then((result) => {
        res.render("index", { blogs: result });
      })
      .catch((err) => {
        console.log(err);
      });
}


const blog_details=(req,res)=>{
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports={
    blog_index,blog_details
}

