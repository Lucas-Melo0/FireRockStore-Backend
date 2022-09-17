import express from "express";
import cors from "cors";
import usersRouter from "./routers/usersRouters.js";
import dotenv from "dotenv";
dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());
server.use(usersRouter);

server.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
