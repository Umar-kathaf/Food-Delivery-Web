import express from "express";
import authMiddlewear from "../Middleware/auth.js";
import {
  addToCart,
  removeFromCart,
  getCart,
} from "../Controllers/Cartcontroller.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddlewear, addToCart);
cartRouter.post("/remove", authMiddlewear, removeFromCart);
cartRouter.post("/get", authMiddlewear, getCart);

export default cartRouter;
