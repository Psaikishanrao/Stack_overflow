

require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const NodeCache = require("node-cache");

const app = express();
const cache = new NodeCache({ stdTTL: 600 });
const PORT = process.env.PORT || 5000;

const apiKey = process.env.STACK_EXCHANGE_API_KEY;


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.use(
  cors({
    origin: ["https://stack-overflow-web.vercel.app", "https://stack-overflow-sooty-rho.vercel.app"],
  })
);


let lastRequestTime = 0;
const REQUEST_DELAY = 5000;

const delayRequest = async () => {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;

  if (timeSinceLastRequest < REQUEST_DELAY) {
    await new Promise((resolve) => setTimeout(resolve, REQUEST_DELAY - timeSinceLastRequest));
  }
  lastRequestTime = Date.now();
};


const fetchWithRetry = async (apiUrl, retries = 3, delayBetweenRetries = 2000) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Attempt ${attempt}: Fetching data...`);
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error(`Attempt ${attempt} failed: ${error.message}`);
      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, delayBetweenRetries));
      }
    }
  }
  throw new Error("Maximum retry attempts reached. Unable to fetch data.");
};

app.get("/api/questions", async (req, res) => {
  const { filter = "hot", page = 1, pagesize = 10, query } = req.query;
  const cacheKey = `${filter}-${page}-${pagesize}-${query || ""}`;


  if (cache.has(cacheKey)) {
    return res.json(cache.get(cacheKey));
  }

  try {

    await delayRequest();


    const apiUrl = query
      ? `https://api.stackexchange.com/2.3/search/excerpts?q=${encodeURIComponent(query)}&order=desc&sort=relevance&site=stackoverflow&page=${page}&pagesize=${pagesize}&key=${apiKey}`
      : `https://api.stackexchange.com/2.3/questions?order=desc&sort=${filter}&site=stackoverflow&page=${page}&pagesize=${pagesize}&key=${apiKey}`;


    const data = await fetchWithRetry(apiUrl);


    cache.set(cacheKey, data);
    res.json(data);
  } catch (error) {
    console.error("Error after retries:", error.message);


    res.status(503).json({
      error: "Service temporarily unavailable due to high traffic. Please try again later.",
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

