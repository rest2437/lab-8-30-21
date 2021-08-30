//importing modules
const express = require("express");
const app = express();
const ejsLayouts = require("express-ejs-layouts");

//port to listen to
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(ejsLayouts);

//setting home page as home
app.get("/", function (req, res) {
  res.render("home");
});

//ALWAYS AT END
app.listen(PORT, () => {
  console.log("Server running on PORT", PORT);
});
