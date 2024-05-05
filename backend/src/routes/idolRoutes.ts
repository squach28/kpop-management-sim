import express from "express";
import { getIdolById } from "../controllers/idolController";
export const idolRouter = express.Router();

idolRouter.get("/:id", getIdolById);
