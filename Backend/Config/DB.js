import mangoose from "mongoose";

export const connectDB = async () => {
  await mangoose
    .connect(
      "mongodb+srv://Umar14:ukmangodb@cluster0.ngcth.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
