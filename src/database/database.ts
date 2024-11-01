import mongoose, { Connection } from "mongoose";
import config from "../config/config";
interface DBConnection extends Connection {}

export const dbConnection: DBConnection = mongoose.createConnection(
  config.MONGO_URI
);

dbConnection.on("connected", () => {
  console.log("Connected to MongoDB database");
});

dbConnection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

dbConnection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});
