import Author from "../../../../database/models/author.js";
import Book from "../../../../database/models/book.js";


export const addAuthor = async (req, res) => {
  const author = new Author(req.body);
  try {
    await author.save();
    res.status(201).json({ message: "Success", author });
  } catch (err) {
    res.status(400).json({ err });
  }
}

export const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find().exec();
    res.json({ message: "Success", authors });
  } catch (err) {
    res.status(500).json(err);
  }
}

export const getAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).exec();
    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.json({ message: "Success", author });
  } catch (err) {
    res.status(500).json(err);
  }
}

export const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.json({ message: "Success", author });
  } catch (err) {
    res.status(400).json(err);
  }
}

export const deleteAuthor = async (req, res) => {

  const authorExist = await Author.findById(req.params.id)
  if (authorExist) {
    await Author.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: 'Author deleted successfully' });
  }
  return res.status(404).json({ message: "Not found" });
}


export const relationShip = async (req, res) => {
  const authorId = req.params.id;
  try {
    const author = await Author.findById(authorId).exec();
    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }
    const books = await Book.find({ author: authorId }).exec();
    res.json({ message: "Success", books });
  } catch (err) {
    res.status(500).json(err);
  }
}