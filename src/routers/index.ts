import { Router } from "express";
import workspaceRouter from "./workspace.router";
import projectRouter from "./project.router";
import datasetRouter from "./dataset.router";

const router = Router();

// /api/v1/workspace
router.use("/workspace", workspaceRouter);

// /api/v1/project
router.use("/project", projectRouter);

// /api/v1/dataset
router.use("/dataset", datasetRouter);
export default router;
