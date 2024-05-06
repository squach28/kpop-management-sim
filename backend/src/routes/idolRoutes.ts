import express from "express";
import { getIdolById } from "../controllers/idolController";
export const idolRoutes = express.Router();

idolRoutes.get("/:id", getIdolById);
