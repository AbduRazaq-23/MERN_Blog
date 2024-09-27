import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

import {
  registerUser,
  logInUser,
  logOutUser,
  getCurrentUser,
} from "../controllers/user.controller.js";

router.route("/register").post(upload.single("image"), registerUser);
router.route("/logIn").post(logInUser);

//@dec secure route
router.route("/logOut").post(verifyJWT, logOutUser);

router.route("/getcurrentuser").get(verifyJWT, getCurrentUser);

export default router;
