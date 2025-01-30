import mongoose from "mongoose";

//? set rule/schema

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
