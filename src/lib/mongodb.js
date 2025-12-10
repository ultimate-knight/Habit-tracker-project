import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return;
    }
    
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error occurred:", error.message);
    throw error;
  }
};

export default dbConnect;
