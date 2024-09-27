import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    image: {
      type: String, // cloudinary url
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default User = mongoose.model("User", userSchema);
