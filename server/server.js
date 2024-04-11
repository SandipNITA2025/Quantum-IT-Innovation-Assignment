import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import routes from "./routes/auth.route.js";
import dbConnect from "./config/db.config.js";

const app = express();

dbConnect();

// middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// test route:
// app.use("/", (req, res) => {
//   return res.json({
//     message: "server is running",
//   });
// });

// routes:
app.use("/api", routes);

// port:
const PORT = process.env.PORT || 8080;

// server:
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
