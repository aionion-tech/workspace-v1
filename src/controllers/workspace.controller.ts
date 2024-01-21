import { NextFunction, Request, Response } from "express";
import { WorkspaceModel } from "../models/Workspace.model";

export const createWorkspace = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userid } = req.headers;
    const { name } = req.body;

    const workspace = await WorkspaceModel.create({
      name,
      owner: parseInt(userid as string),
    });

    res.status(201).json({
      workspace,
      message: "Workspace created",
    });
  } catch (error) {
    next(error);
  }
};
