const express = require("express");
const app = express();
const path = require("path");
const connection = require("../blog");
const cors = require("cors");
var mongodb = require('mongodb');
app.use(cors());

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

// signup

app.post("/signup", async (req, res) => {
  const data = req.body;
  await connection.insertMany([data]);

  try {
    res.render("home");
  } catch (error) {
    console.error("Error inserting documents:", error);
    res.status(500).send("An error occurred while inserting documents.");
  }
});
app.post("/blog", async (req, res) => {
  try {
    const data = req.body;
    const test = await connection.insertMany([data]);
    res.send(test);

    // res.render("home");
  } catch (error) {
    console.error("Error inserting documents:", error);
    res.status(500).send("An error occurred while inserting documents.");
  }
});

//   login

app.post("/myblog", async (req, res) => {
  try {
    const check = await connection.find({ wallet: req.body.wallet });

    return res.send(check);
  } catch (error) {
    res.send("wrong details");
  }
});

app.post("/myblog", async (req, res) => {
  try {
    const { wallet, title, details } = req.body;

    // Find the blog post based on the wallet address
    const existingPost = await connection.findOne({ wallet });

    if (!existingPost) {
      return res.status(404).send("Blog post not found");
    }

    // Update the title and details of the existing post
    existingPost.title = title;
    existingPost.details = details;

    // Save the updated post
    const updatedPost = await existingPost.save();

    return res.send(updatedPost);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.delete("/myblog/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the blog post based on the provided ID
    const existingPost = await connection.findOne({ _id: id });

    if (!existingPost) {
      return res.status(404).send("Blog post not found");
    }

    // Delete the blog post
    await existingPost.remove();

    return res.send("Blog post deleted");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.post("/updateBlog", async (req, res) => {
  try {
    const check = await connection.updateOne(req.body);
    
  } catch (error) {
    res.send("wrong details");
  }
});


 app.post("/deleteBlog", async (req, res) => {
   try {
     const check = await connection.deleteOne({_id: (req.body.id  )});
     res.send(check)

   } catch (error) {
     res.send("wrong details");
   }
 });

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
