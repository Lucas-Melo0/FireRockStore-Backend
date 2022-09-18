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

<<<<<<< HEAD
    res.send(teste);
=======
async function showProductList(req, res) {
  try {
    const products = await db.collection("products").find().toArray();

    res.send(products);
>>>>>>> 3824a4b2ff5a18bf1cd220e64c802d4f9cf11c49
  } catch (error) {
    res.sendStatus(500);
  }
}

async function productInsertion(req, res) {
  try {
    const vision = db.collection("products").insertOne(req.body);

    console.log(vision);
    return res.status(200).send("hiiiii");
  } catch (error) {
    console.log(error);
    res.status(500).send("grrrrrrrr");
  }
}

export { listHomePageProducts, productInsertion, showProductList };
