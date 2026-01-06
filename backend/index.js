import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const serverPOrt = process.env.PORT || 5001;

app.use(cors(), express.json());

app.listen(serverPOrt, () => {
  console.log(`Server is listening at port ${serverPOrt}`);
});
