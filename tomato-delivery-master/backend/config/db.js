import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://next3d:blender1S4@cluster0.h6uromo.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}