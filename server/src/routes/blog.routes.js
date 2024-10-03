import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

import {
  PostBlog,
  getBlog,
  getAllBlog,
  deleteBlog,
} from "../controllers/blog.controllers.js";

router.route("/").post(upload.single("image"), PostBlog);
router.route("/").get(getAllBlog);
router.route("/:blogId").get(getBlog).delete(deleteBlog);

export default router;
