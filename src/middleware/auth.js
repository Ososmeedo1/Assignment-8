import jwt from 'jsonwebtoken'


const auth =(req, res, next) => {
  const authorization = req.headers.authorization;
    const token = authorization.split('Osama__')[1];
    const payload = jwt.verify(token, 'notesysetm');
    if (!payload) {
      return res.status(400).json({ message: "Invalid payload"})
    }
    req.user = payload
    next()
}

export default auth;