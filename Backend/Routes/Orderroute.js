import express from "express";
import {
  listOrders,
  placeOrder,
  updateStatus,
  usersOrder,
  verifyOrder,
} from "../Controllers/Ordercontroller.js";
import authMiddleware from "../Middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/usersOrder", authMiddleware, usersOrder);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;
