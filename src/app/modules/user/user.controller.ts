import { NextFunction, Request, Response } from "express";
import { createUser } from "./user.service";

export const createNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await createUser();
  if (user) {
    res.status(201).json({
      status: "success",
      message: "User Created",
      data: user,
    });
  } else {
    res.status(200).json({
      status: "error", 
      message: "User Not Created"  ,
      data: user,
    });
  }
};

// Route -> Controller -> Service -> Model
