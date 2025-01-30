import express from "express";
import mongoose from "mongoose";
import Product from "./product.model.js";

const app = express();
app.use(express.json());

const connectDB = async () => {
  try {
    const url =
      "mongodb+srv://gobind:gobind1234@school.xg9dy.mongodb.net/bhatbhateni?retryWrites=true&w=majority&appName=School";
    await mongoose.connect(url);
    console.log("DB connection successful");
  } catch (error) {
    console.log("Db connection Failed", error);
    console.log(error.message);
    process.exit(1);
  }
};
await connectDB();

//? Api

app.post("/product/add/", async(req, res) => {
  const newProduct = req.body;

  await Product.create(newProduct);

  res.status(201).send({msg: "Product Added successfully"});
});

//? Network port

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening Port : ${PORT}`);
});
