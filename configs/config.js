import mongoose from "mongoose";

export const connectDB = async (DB_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "linInfoApp",
    };

    await mongoose.connect(DB_URL, DB_OPTIONS);
    console.log("DB connected Sucessfully");
  } catch (error) {
    console.log(error);
  }
};