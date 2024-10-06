const express = require("express");
const router = express.Router();
const { fetchNews } = require("../controllers/newsController");

router.get("/", async (req, res) => {
  const topHeadlines = await fetchNews();
  const sportsNews = await fetchNews("sports", 5);
  const cookingNews = await fetchNews("gastronomy", 5);
  const techNews = await fetchNews("technology", 5);
  const financeNews = await fetchNews("business", 5);
  const entertainmentNews = await fetchNews("entertainment", 5);


  res.render("index", {
    topHeadlines,
    sportsNews,
    cookingNews,
    techNews,
    financeNews,
    entertainmentNews,
  });
});

module.exports = router;
