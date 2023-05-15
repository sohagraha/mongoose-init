import mongoose from "mongoose";
import app from "./app";

const port:Number = 5000;

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-one");
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

connect();
