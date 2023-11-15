import mongoose, { ConnectOptions, connect } from "mongoose";

export const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    } as ConnectOptions);
    console.log(
      process.env.MONGO_URI,
      `Connected succesfully  ${conn.connection.host}`
    );
  } catch (error) {
    console.log(process.env.MONGO_URI, error);
    process.exit(1);
  }
};
