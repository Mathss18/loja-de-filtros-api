import express from "express";
import cors from "cors";
import { orderRoutes } from "./routes/order-routes";
import dotenv from "dotenv";
import { execute } from "./test";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(3001, () => execute());
