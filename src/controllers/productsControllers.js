import { db } from "../database/db.js";

async function listHomePageProducts(req, res) {
  try {
    const teste = await db.collection("users").find().toArray();
    console.log(teste);

    res.send(teste);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function productInsertion(req, res) {
  try {
    const vision = db.collection("teste3").insertOne(req.body);

    console.log(vision);
    return res.status(200).send("hiiiii");
  } catch (error) {
    console.log(error);
    res.status(500).send("grrrrrrrr");
  }
}

export { listHomePageProducts, productInsertion };
