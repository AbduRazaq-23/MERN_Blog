import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

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
app.use(cookieParser());
app.use(express.static("public"));

//@dec import routes
import userRoutes from "./routes/user.routes.js";

app.use("/api/users", userRoutes);

export default app;
