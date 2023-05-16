import { Schema, model } from "mongoose";
import IUser from "./user.interface";

//create schema using interface

const userSchema = new Schema<IUser>({
  id: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
  },
  dateOfBirth: { type: String, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  email: { type: String, required: false },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});

//create a model
const User = model<IUser>("User", userSchema);


export default User;
