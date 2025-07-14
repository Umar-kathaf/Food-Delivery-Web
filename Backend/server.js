import express from "express";
import cors from "cors";
import { connectDB } from "./Config/DB.js";
import foodRouter from "./Routes/Foodroute.js";
import userRouter from "./Routes/Userroute.js";
import "dotenv/config";
import cartRouter from "./Routes/Cartroute.js";
import orderRouter from "./Routes/Orderroute.js";

// app config
const app = express();
const PORT = process.env.PORT || 4000;
// middleware
app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("Uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Check the port is working or not
app.get("/", (req, res) => {
  res.send("API Done");
});

app.listen(PORT, () => {
  console.log(`Server Started on http://localhost:${PORT}`);
});

//mongodb+srv://Umar14:ukmangodb@cluster0.ngcth.mongodb.net/?
