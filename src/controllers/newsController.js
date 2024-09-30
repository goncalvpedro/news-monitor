const axios = require("axios");

const NEWS_API_BASE_URL = "https://newsapi.org/v2";
const NEWS_API_KEY = "1aa9ad7056b54756a43e981d555c3e92";

async function fetchNews(category = "", pageSize = 10) {
  try {
    const endpoint = category
      ? `${NEWS_API_BASE_URL}/top-headlines?category=${category}&pageSize=${pageSize}&apiKey=${NEWS_API_KEY}`
      : `${NEWS_API_BASE_URL}/top-headlines?country=us&pageSize=${pageSize}&apiKey=${NEWS_API_KEY}`;

    const response = await axios.get(endpoint);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news: ", error);
    return [];
  }
}

module.exports = {
  fetchNews,
};
