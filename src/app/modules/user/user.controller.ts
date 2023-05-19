import { NextFunction, Request, Response } from "express";
import { createUser, getAllAdminUsers, getAllUsers, singleUser } from "./user.service";

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

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getAllUsers();
  res.status(200).json({
    status: "success",
    message: "Users Fetched",
    data: users,
  });
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await singleUser(req.params.id);
  res.status(200).json({
    status: "success",
    message: "User Fetched",
    data: user,
  });
};

export const getAdmiUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getAllAdminUsers();
  res.status(200).json({
    status: "success",
    message: "Users Fetched",
    data: users,
  });
};

// Route -> Controller -> Service -> Model
