const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get("/api", (req, res) =>{
  res.set("Access-Control-Allow-Origin", "*")

  res.json({name:"Hell"})
})
app.post("/post_api", (req, res) =>{
  console.log(req)
})

app.listen(8000, ()=>{
  console.log("Server is start")
})