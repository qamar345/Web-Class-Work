const Blog = require("../models/blog.model");

exports.createBlog = async (req, res) => {
  const { title, content, tags, category, author, featuredImage } = req.body;

  if (!title || !content || !tags || !category || !featuredImage) {
    res.json({ message: "All fields are required!!!" });
    return;
  }

  await Blog.create({
    title: title,
    content: content,
    tags: tags,
    category: category,
    author: author,
    imageURL: featuredImage,
  });

  res.json({ message: "Blog save as draft", success: true });
};

exports.editBlog = async (req, res) => {};

exports.deleteBlog = (req, res) => {};

exports.readBlog = () => {};
