import { db } from "../database/db.js";

async function listHomePageProducts(req, res) {
  try {
    const teste = await db.collection("products").find().toArray();
    const sera = teste.map((i) => i.products);
    console.log(sera);

    res.send(teste);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function productInsertion(req, res) {
  try {
    await db.collection("products").insertOne(req.body);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { listHomePageProducts, productInsertion };
