import dotenv from "dotenv";
dotenv.config();
import mongoose, { ConnectOptions, connect } from "mongoose";

mongoose.Promise = global.Promise;

export const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    console.log(
      process.env.MONGO_URI,
      `Connected succesfully  ${conn.connection.host}`
    );
  } catch (error) {
    console.log(process.env.MONGO_URI, error);
    process.exit(1);
  }
};
