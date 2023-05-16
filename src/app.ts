import cors from "cors";
import express, { Application } from "express";
import userRoute from "./app/modules/user/user.route";

const app: Application = express();
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/v1/user", userRoute);

export default app;
