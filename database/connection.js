import mongoose from "mongoose";


const dbConnection = () => {
  mongoose.connect(`mongodb://localhost:27017/library`).then(() => {
    console.log("DB connected");
  }).catch(() => {
    console.log("DB failure");
  })
}

export default dbConnection;