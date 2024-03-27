import express from "express";
import { createFile } from "../controllers/filesControllers";

import validateBody from "../helpers/validateBody.js";
import { createFilesSchema } from "../schemas/filesSchemas.js";
import { checkExtension } from "../midlewars/checkExtension.js";

const filesRouter = express.Router();

filesRouter.post(
  "/",
  validateBody(createFilesSchema),
  //   checkExtension,
  createFile
);

export default filesRouter;
