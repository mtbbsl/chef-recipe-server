const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef Recipe is running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefs.find(c => c.id == id);
  res.send(selectedChef);
  console.log(id);
})

app.get('/recipes', (req, res) => {
  res.send(recipes);
})

app.listen(port, () => {
  console.log(`Chef Recipe API is running on port: ${port}`);
});
