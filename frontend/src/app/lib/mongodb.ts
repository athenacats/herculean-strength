import { ConnectOptions, connect } from "mongoose";

export const dbConnect = async () => {
  try {
    await connect(
      "mongodb+srv://chenalonya:7M4pm80sedTR93zy@cluster0.ojb8tyg.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
    console.log(process.env.MONGO_URI, "Connected succesfully");
  } catch (error) {
    console.log(process.env.MONGO_URI, error);
  }
};
