import mongoose, { ConnectOptions, connect } from "mongoose";

export const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://chenalonya:7M4pm80sedTR93zy@cluster0.ojb8tyg.mongodb.net/herculean?retryWrites=true&w=majority"
    );
    console.log(
      process.env.MONGO_URI,
      `Connected succesfully  ${conn.connection.host}`
    );
  } catch (error) {
    console.log(process.env.MONGO_URI, error);
    process.exit(1);
  }
};
