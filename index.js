console.log("Server is up...");

import Express from "express";
import Products from "./products.js";

const app = Express();
const PORT = 3000;

app.get("/", (req, res) => {
  //res.send("\n\n~~.You are connected to !iCurlyTales");
  res.json(Products);
});
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
