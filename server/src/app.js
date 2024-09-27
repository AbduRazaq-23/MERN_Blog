import express from "express";
import cors from "cors";

const app = express();

//@dec middleware
app.use(
  cors({
    origin: "http://localhost/", // to change
    Credential: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

export default app;
