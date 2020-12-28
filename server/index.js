const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const posts = require("./routes/api/posts");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use("/api/posts", posts);

// Handle production scenario
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(`${__dirname}/public/`));

  // Handle SPA
  app.get(/.*/, (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`));
