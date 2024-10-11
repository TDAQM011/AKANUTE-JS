const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join("public")));

const indexpage = path.join(__dirname, "index.html");

app.get("/", (req, res) => {
  res.sendFile(indexpage);
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
