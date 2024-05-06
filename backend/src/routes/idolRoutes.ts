import express from "express";
import { getIdolById, getIdols } from "../controllers/idolController";
export const idolRoutes = express.Router();

idolRoutes.get("/", getIdols);
idolRoutes.get("/:id", getIdolById);
