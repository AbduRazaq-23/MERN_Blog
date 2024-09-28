import { User } from "../models/user.model.js";
import { asyncHandler } from "../utills/asyncHandler.js";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  const token =
    req.cookies.token ||
    req.header("Authorization")?.replace("Bearer", "").trim();
  try {
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select(
      "-password -token"
    );

    if (!user) {
      return res.status(404).json("User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json("Invalid or expired token");
  }
});
