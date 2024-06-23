import mongoose from "mongoose"
import { InvalidateCacheProps } from "../types/types.js";
import { myCache } from "../app.js";
import { Product } from "../models/product.js";

export const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017", {
        dbName : "Ecommerce-Website"
    })
    .then((c) => console.log(`DB Connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
}

export const invalidateCache =async ({
  product,
  order,
  admin,
}: InvalidateCacheProps) => {
  if (product) {
    const productKeys: string[] = [
      "latest-products",
      "categories",
      "all-products",
    ];

    const products = await Product.find({}).select("_id");
    products.forEach((i) => productKeys.push(`product-${i._id}`));

    myCache.del(productKeys);
  }
  if (order) {
    
  }
  if (admin) {
    
  }
};