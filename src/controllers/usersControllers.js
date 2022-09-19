import { db } from "../database/db.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

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

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await db.collection("users").find().toArray();
    const isValidUser = users.find(
      (user) =>
        user.email === email && bcrypt.compareSync(password, user.password)
    );
    if (isValidUser) {
      const { _id, name } = isValidUser;
      const token = uuidv4();
      await db.collection("sessions").deleteMany({ userId: _id });
      await db.collection("sessions").insertOne({ userId: _id, token });
      return res.status(200).send({ name, token });
    }
    return res.sendStatus(404);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

const orderDetails = async (req, res) => {
  try {
    const { token, price, category, id } = req.body;
    const isActiveUser = await db
      .collection("sessions")
      .findOne({ token: token });

    if (!isActiveUser) return res.sendStatus(404);

    const { userId } = isActiveUser;
    await db
      .collection("orders_details")
      .insertOne({ price, category, id, userId });

    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
};

export { userSignup, userLogin, orderDetails };
