import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getBook, updateBook } from "./Controller/book.controller.js";


const router = Router()


router.post('/add', addBook)
router.get('/', getAllBooks)
router.get('/:id', getBook)
router.put('/update/:id', updateBook)
router.delete('/delete/:id', deleteBook)

export default router;