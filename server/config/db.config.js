import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(`Mongo server run on ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`${error}`);
  }
};

export default dbConnect;
