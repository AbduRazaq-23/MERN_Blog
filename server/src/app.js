import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//@dec middleware
app.use(
  cors({
    origin: "http://localhost:5173", // to change
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));

//@dec import routes
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";

app.use("/api/users", userRoutes);
app.use("/api/blog", blogRoutes);

export default app;
