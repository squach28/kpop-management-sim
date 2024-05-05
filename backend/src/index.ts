import express from "express";
import bodyParser from "body-parser";
const app = express();

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
