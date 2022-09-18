import { db } from "../database/db.js";

async function listHomePageProducts(req, res) {
  try {
    const products = await db.collection("products").find().toArray();
    console.log(products);
    res.send(products);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function showProductList(req, res) {
  try {
    const products = await db.collection("products").find().toArray();

    res.send(products);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function productInsertion(req, res) {
  try {
    const products = db.collection("products").insertMany(req.body);

    console.log(products);
    return res.status(200).send("it worked!");
  } catch (error) {
    console.log(error);
    res.status(500).send("grrr");
  }
}

export { listHomePageProducts, productInsertion, showProductList };
