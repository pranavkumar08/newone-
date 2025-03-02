import mongoose from "mongoose";
const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("database is connected")
  } catch (error) {
    console.log("mongo db not connected ")
  }
};

export default connectdb;
