const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
const PORT = 3018;
//ミドルウェアを使ってusers.jsをserver.jsから引き離す
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
const mongoose = require("mongoose");
require("dotenv").config();
//データベース接続
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("DBと接続完了");
  })
  .catch((err) => {
    console.log("err");
  });
app.get("/", (req, res) => {
  res.send("hello express");
});
// app.get("/yahoo",(req,res)=>{
//     res.send("yahoo express")
//     });
app.listen(PORT, () => console.log("サーバが起動しました"));
