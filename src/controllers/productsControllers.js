import { db } from "../database/db.js";

async function listHomePageProducts(req, res) {
  try {
    const teste = await db.collection("users").find().toArray();
    console.log(teste);

    res.status(200).send("shhhhh");
  } catch (error) {
    res.sendStatus(500);
  }
}

async function productInsertion(req, res) {
  try {
    const vision = db.collection("teste3").insertMany(req.body);

    console.log(vision);
    return res.status(200).send("hiiiii");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { listHomePageProducts, productInsertion };
