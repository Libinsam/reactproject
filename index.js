const express= require("express");
const mongodb= require('mongodb');
const app = express();
const connectDB =async()=>{
    mongodb.connect("mongodb://localhost:3001//my-react-app")
    const productSchema= new mongodb.Schema({});
    const product =mongodb.model("products",productSchema);
    const data = await product.find();
    console.warn(data);
}
connectDB();