import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully Connected to MONGODB...".bgBlue.white.bold);
  } catch (error) {
    connectDB("We could not connect to MONGODB".bgRed.white.bold);
  }
};

export default connectDB;
