import { db } from "../database/db.js";
import bcrypt from "bcrypt";

const userSignup = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const users = await db.collection("users").find().toArray();
    const isDuplicate = users.find(
      (user) => user.email === email || user.name === name
    );
    if (isDuplicate) {
      return res.sendStatus(409);
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    delete req.body.confirmation;
    await db
      .collection("users")
      .insertOne({ ...req.body, password: hashedPassword });

    return res.sendStatus(201);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

export { userSignup };
