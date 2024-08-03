import Book from "../../../../database/models/book.js";


export const addBook = async(req, res, next) => {
  const book = new Book(req.body);
  try {
    await book.save();
    res.status(201).json({message: "Success", book});
  } catch (err) {
    res.status(400).send(err);
  }
}

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().exec();
    return res.status(200).json({message: "Success", books});
  } catch (err) {
    return res.status(500).send(err);
  }
}

export const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).exec();
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({message: "Success", book});
  } catch (err) {
    res.status(500).json(err);
  }
}

export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({message: "Success", book});
  } catch (err) {
    res.status(400).json(err);
  }
}

export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
}