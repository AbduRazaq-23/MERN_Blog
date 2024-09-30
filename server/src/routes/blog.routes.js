import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

import { PostBlog, deleteBlog } from "../controllers/blog.controllers.js";

router.route("/").post(upload.single("image"), PostBlog);
router.route("/:blogId").delete(deleteBlog);

export default router;
