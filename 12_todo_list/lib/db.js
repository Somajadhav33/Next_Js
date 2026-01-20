import mongoose from "mongoose";
import { promise } from "zod";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) throw new Error("please define the mongodb url");

let cashed = global.mongoose;

if (!cashed) {
  cashed = global.mongoose = { conn: null, promise: null };
}

async function connectDb() {
  if (cashed.conn) {
    return cashed.conn;
  }
  if (!cashed.promise) {
    cashed.promise = mongoose.connect(MONGO_URI).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cashed.conn = await cashed.promise;
  } catch (error) {
    cashed.promise = null;
    throw error;
  }

  return cashed.conn;
}

export default connectDb;
