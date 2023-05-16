import mongoose from "mongoose";
let uri_link = process.env.MONGO_URI;

mongoose
  .connect(uri_link)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));
