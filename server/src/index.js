import app from "./app.js";
import dotenv from "dotenv";
import { dbConnect } from "./db/dbConnect.js";

dotenv.config();

dbConnect().then(() => {
  console.log("db connected");
  app.listen(process.env.PORT, () => {
    console.log(`app is running on ${process.env.PORT}`);
  });
});
