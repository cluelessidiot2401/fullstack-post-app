const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();
const credentials = {
  username: "dbUser123",
  password: "dbPass123",
};
const config = {
  db: "vue_express",
  collection: "posts",
};

const connString = `mongodb+srv://${credentials.username}:${credentials.password}@cluster0.0v1tm.mongodb.net/${config.db}?retryWrites=true&w=majority`;

// Get posts
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// Add posts
router.post("/", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date(),
  });
  res.status(201).send();
});

// delete posts
router.delete("/:id", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(connString, {
    useNewUrlParser: true,
  });
  return client.db(config.db).collection(config.collection);
}

module.exports = router;
