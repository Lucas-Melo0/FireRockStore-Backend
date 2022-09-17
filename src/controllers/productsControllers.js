import { db } from "../database/db.js";

async function listHomePageProducts(req, res) {
  try {
    const teste = await db.collection("products").find().toArray();
    const sera = teste.map((i) => i.products);
    console.log(sera);

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

export { listHomePageProducts };
