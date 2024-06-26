import { Request, Response } from "express";
import { db } from "../utils/db";
import { queryIdolById, queryIdols } from "../utils/queries";

export const getIdols = async (req: Request, res: Response) => {
  try {
    db.query(queryIdols, (error, results) => {
      if (error) {
        res
          .status(500)
          .json({ message: "Something went wrong, please try again later." });
      }

      const idols = results.rows;
      res.status(200).json(idols);
    });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again later." });
  }
};

export const getIdolById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    db.query(queryIdolById, [id], (error, results) => {
      if (error) {
        res
          .status(500)
          .json({ message: "Something went wrong, please try again later." });
        return;
      }

      if (results.rows.length === 0) {
        res.status(404).json({ message: "Idol not found" });
        return;
      }

      const idol = results.rows[0];
      res.status(200).json(idol);
    });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again later." });
  }
};
