import express from "express";
import cors from "cors";
import usersRouter from "./routers/usersRouters.js";

const server = express();
server.use(express.json());
server.use(cors());
server.use(usersRouter);

server.listen(5000, () => {
  console.log("listening on 5000");
});
