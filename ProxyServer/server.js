require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const NodeCache = require("node-cache");

const app = express();
const cache = new NodeCache({ stdTTL: 600 });
const PORT = process.env.PORT || 5000;


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
});

app.use(limiter);

app.use(
  cors({
    origin: ["http://localhost:5173", "https://stack-overflow-5rb3eykbs-pragda-saikishan-raos-projects.vercel.app"], 
  })
);



app.get("/api/questions", async (req, res) => {
  const { filter = "hot", page = 1, pagesize = 10 } = req.query;
  const cacheKey = `${filter}-${page}-${pagesize}`;


  if (cache.has(cacheKey)) {
    return res.json(cache.get(cacheKey));
  }

  try {
    const response = await axios.get(
      `https://api.stackexchange.com/2.3/questions?order=desc&sort=${filter}&site=stackoverflow&pagesize=${pagesize}&page=${page}`
    );
  
    cache.set(cacheKey, response.data); 
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching questions:", error.message);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
