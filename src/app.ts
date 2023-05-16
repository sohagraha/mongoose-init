import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  // inserting a test data
  /*
    step 1 : create a Interface
    step 2 : create a schema
    step 3 : create a model
    step 4 : create a database Query
    */
  //   res.send("Hello World!");

  //   create a Interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

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

  const createUser = async () => {
    try {
      const user = new User({
        id: "3",
        role: "student",
        password: "123456",
        name: {
          firstName: "Rahul",
          middleName: "Kumar",
          lastName: "Singh",
        },
        dateOfBirth: "1998-01-01",
        gender: "male",
        email: "",
        contactNo: "1234567890",
        emergencyContactNo: "1234567890",
        presentAddress: "Kolkata",
        permanentAddress: "Kolkata",
      });
      await user.save();
      console.log("User Created");
      res.send(user);
    } catch (err) {
      console.log(err);
    }
  };

  createUser();
});

export default app;
