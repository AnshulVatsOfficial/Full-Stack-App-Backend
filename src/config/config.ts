import dotenv from "dotenv";
import { IConfig } from "../dto/dto";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 0;

const config: IConfig = {
  MONGO_URI,
  PORT,
};

export default config;
