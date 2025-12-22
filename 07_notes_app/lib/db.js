import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URL;

let is_connected = false;
if (!MONGODB_URI) {
  throw new Error("MONGODB_URL is not defined");
}

async function dbConnect() {
  if (is_connected) {
    return console.log("Mongo is already connected!!");
  }
  try {
    const db = await mongoose.connect(MONGODB_URI);
    is_connected = db.connections[0].readyState === 1;
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("Failed to connect");
    throw error;
  }
}

export default dbConnect;
