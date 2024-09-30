import { asyncHandler } from "../utills/asyncHandler.js";
import { Blog } from "../models/blog.model.js";
import { uploadOnCloudinary } from "../utills/cloudinary.js";

//********************************************************************************//
//@dec postBlog Controller
const PostBlog = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!(title, description)) {
    return res.status(400).json("fill all the field");
  }

  //@dec pick image local file path
  const img = req.file?.path;

  //@dec if not available path throw error
  if (!img) {
    return res.status(400).json("image localpath required");
  }

  //@dec upload on cloudinary store on variable that path
  const image = await uploadOnCloudinary(img);

  //@dec check if not availabe throw error
  if (!image) {
    return res.status(400).json("image file required");
  }

  //@dec store data on mongodb
  const postBlog = await Blog.create({
    title,
    image: image?.url,
    description,
  });

  //@dec return that as json
  return res
    .status(201)
    .json({ message: "blog posted successfully", postBlog });
});

//********************************************************************************//
//@dec deleteBlog Controller
const deleteBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  const deleteBlogById = await Blog.findByIdAndDelete(blogId);
  return res.json("blog deleted successfully");
});

export { PostBlog, deleteBlog };
