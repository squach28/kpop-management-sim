import express from "express";
import bodyParser from "body-parser";
import { idolRoutes } from "./routes/idolRoutes";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/idols", idolRoutes);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
