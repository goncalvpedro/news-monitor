const axios = require("axios");
const NodeCache = require("node-cache");

const NEWS_API_BASE_URL = "https://newsapi.org/v2";
const NEWS_API_KEY = "1aa9ad7056b54756a43e981d555c3e92";

const cache = new NodeCache({ stdTTL: 36000 });

async function fetchNews(category = "", pageSize = 9) {
  const cacheKey = `news_${category}_${pageSize}`;

  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    console.log("Returning cached data");
    return cachedData;
  }

  try {
    const endpoint = category
      ? `${NEWS_API_BASE_URL}/top-headlines?category=${category}&pageSize=${pageSize}&apiKey=${NEWS_API_KEY}`
      : `${NEWS_API_BASE_URL}/top-headlines?country=us&pageSize=${pageSize}&apiKey=${NEWS_API_KEY}`;

    const response = await axios.get(endpoint);
    const articles = response.data.articles;

    cache.set(cacheKey, articles);

    return articles;
  } catch (error) {
    console.error("Error fetching news: ", error);
    return [];
  }
}

module.exports = {
  fetchNews,
};
