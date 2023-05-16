import { NextFunction, Request, Response } from "express";
import { createUser } from "./user.service";
import User from "./user.model";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    message: "Users Fetched",
    data: users,
  });
};

export const createNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUser(data);
  if (user) {
    res.status(201).json({
      status: "success",
      message: "User Created",
      data: user,
    });
  } else {
    res.status(200).json({
      status: "error",
      message: "User Not Created",
      data: user,
    });
  }
};

// Route -> Controller -> Service -> Model
