import { Router } from "express";
import { addAuthor, deleteAuthor, getAuthor, getAuthors, relationShip, updateAuthor } from "./Controller/author.controller.js";


const router = Router();

router.post('/add', addAuthor)
router.get('/', getAuthors)
router.get('/:id', getAuthor)
router.put('/update/:id', updateAuthor)
router.delete('/delete/:id', deleteAuthor)
router.get('/authors/:id/books', relationShip)

export default router