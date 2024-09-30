const express = require("express");
const path = require("node:path");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const newsRoutes = require("./routes/news");

app.use("/", newsRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running successfully on http://localhost:${PORT}/`);
});
