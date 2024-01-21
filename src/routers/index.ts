import { Router } from "express";
import workspaceRouter from "./workspace.router";

const router = Router();

// /api/v1/workspace
router.use("/workspace", workspaceRouter);

export default router;
