import { Request, Response } from "express";

export const getIdolById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again later." });
  }
};
