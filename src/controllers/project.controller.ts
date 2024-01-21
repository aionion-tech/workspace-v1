import { NextFunction, Request, Response } from "express";
import { ProjectModel } from "../models/Project.model";

export const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, workspace } = req.body;

    const project = await ProjectModel.create({
      name,
      workspace,
    });

    res.status(201).json({
      project,
      message: "Project created",
    });
  } catch (error) {
    next(error);
  }
};
