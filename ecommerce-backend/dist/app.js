import express from 'express';
import NodeCache from 'node-cache';
import userRoute from "./routes/user.js";
import productRoute from "./routes/products.js";
import { connectDB } from './utils/features.js';
import { errorMiddleware } from './middlewares/error.js';
const port = 3000;
connectDB();
export const myCache = new NodeCache();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("API Wprking with /api/v1");
});
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`server is ruuning on ${port}`);
});
