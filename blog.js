const mongoose = require("mongoose");
// const collection = require("./mongodb");

mongoose
  .connect("mongodb+srv://perytrambadiya007:<password>@cluster0.pfy3nfn.mongodb.net/")

  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB:", error);
  });

const logInschema = new mongoose.Schema({
  Tittle: {
    type: String,
  },
  Details: {
    type: String,
  },
  wallet: {
    type: String,
  },
});

const CreateBlog = mongoose.model("BlogConnection", logInschema);
module.exports = CreateBlog;
