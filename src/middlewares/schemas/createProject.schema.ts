import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string(),
  workspace: z.number(),
});
