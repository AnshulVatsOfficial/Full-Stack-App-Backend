import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import config from "./config/config";

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(config.PORT, () => {
  console.log(`Server is working and listening on PORT ${config.PORT}`);
});
