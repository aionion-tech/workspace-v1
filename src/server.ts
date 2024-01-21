import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import { envConfig } from "./config";
import router from "./routers";
import { rootError } from "./middlewares/rootError.middleware";

const app = express();

app.use(express.json());

app.use("/workspace/api/v1", router);

app.get("/workspace/echo", async (req: Request, res: Response) => {
  res.status(200).send("Hey workspace!");
});

app.use(rootError);

app.listen(envConfig.SERVER.PORT, async () => {
  console.log(
    `[server]: Server is running at http://localhost:${envConfig.SERVER.PORT}`
  );
});
