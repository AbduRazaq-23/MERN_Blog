import { asyncHandler } from "../utills/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utills/cloudinary.js";
import bcrypt from "bcrypt";

//********************************************************************************//
//@dec Registration Controller
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!(name, email, password)) {
    return res.status(400).json({ message: "fill all the field" });
  }

  const existedUser = await User.findOne({ email });
  if (existedUser) {
    return res.status(409).json({ message: "User already exist with email" });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  //@dec pick avatar local file path
  const avatarLocalPath = req.file?.path;

  //@dec if not available path throw error
  if (!avatarLocalPath) {
    return res.status(400).json({ message: "Avatar localpath required" });
  }

  //@dec upload on cloudinary store on variable that path
  const avatar = await uploadOnCloudinary(avatarLocalPath);

  //@dec check if not availabe throw error
  if (!avatar) {
    return res.status(500).json({ message: "avatar file required" });
  }

  //@dec store data on mongodb
  const user = await User.create({
    name,
    image: avatar?.url,
    email,
    password: hashPassword,
  });

  //@dec find that store data by id then store that on variable
  const createdUser = await User.findById(user._id).select("-password ");

  //@dec if not find that data throw error
  if (!createdUser) {
    return res
      .status(500)
      .json({ message: "something went wrong while registration" });
  }

  //@dec return that as json
  return res
    .status(200)
    .json({ message: "user registered successfully", createdUser });
});

//********************************************************************************//
//@dec LogIn controller
const logInUser = asyncHandler(async (req, res) => {
  //@dec get data from req.body
  const { email, password } = req.body;

  //@dec if not available throw error
  if (!(email, password)) {
    return res.status(400).json("fill the field");
  }
  //@dec find email and username on database
  const user = await User.findOne({ email });

  //@dec if not availabe throw error
  if (!user) {
    return res.status(401).json("user doesn't exist");
  }

  //@dec then compare password is that valid
  const isPasswordValid = await bcrypt.compare(password, user.password);

  //@dec if not valid throw error
  if (!isPasswordValid) {
    return res.status(400).json("Invalid Credentials");
  }

  //@dec call a function to generate token by user id
  const token = user.generateToken();
  user.token = token;
  await user.save({ validateBeforeSave: false });

  //@dec then store that data on a variable remove password and refreshToken
  const userLogedIn = await User.findById(user._id).select("-password ");

  //@dec Setting a cookie without options
  const options = {
    httpOnly: false,
  };
  //@dec store token on cookie then send that all in response
  return res.status(200).cookie("token", token, options).json({
    userLogedIn,
    message: "User logged In Successfully",
  });
});

//********************************************************************************//
//@dec LogOut Controller
const logOutUser = asyncHandler(async (req, res) => {
  //@dec find by id and the unset that token.
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        token: 1,
      },
    },
    {
      new: true,
    }
  );

  //@dec Setting a cookie without options
  const options = {
    httpOnly: true,
    secure: true,
  };
  //@dec return that res and clear coookies
  return res
    .status(200)
    .clearCookie("token", options)
    .json("user logOut succesfully");
});

//********************************************************************************//
//@dec get current user
const getCurrentUser = asyncHandler((req, res) => {
  return res.status(200).json(req.user);
});

//********************************************************************************//
//@dec export the controller
export { registerUser, logInUser, logOutUser, getCurrentUser };
