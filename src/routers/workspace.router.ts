import { Router } from "express";
import { validate } from "../middlewares/validate";
import { createWorkspace } from "../controllers/workspace.controller";
import { createWorkspaceSchema } from "../middlewares/schemas/createWorkspace.schema";

const router = Router();

router.post("", validate(createWorkspaceSchema), createWorkspace);

export default router;
