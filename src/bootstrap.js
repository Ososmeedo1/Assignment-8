import connected from "../database/connection.js";
import authorRouter from "./modules/Author/author.routes.js";
import bookRouter from "./modules/Book/book.routes.js";





const bootstrap = (app,express) => {
  connected()
  app.use(express.json())
  app.use('/books', bookRouter)
  app.use('/authors', authorRouter)

  app.use('*',(req, res) => {
    return res.json({message: "Not Found"})
  })
}

export default bootstrap