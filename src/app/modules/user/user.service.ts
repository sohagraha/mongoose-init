import IUser from "./user.interface";
import User from "./user.model";

export const createUser = async (
  payload: IUser
): Promise<IUser | undefined> => {
  try {
    const user = new User(payload); //create a new user User --> Class --> Model
    await user.save(); // Built in instance method
    console.log("User Created");
    user.fullName();
    return user;
  } catch (err) {
    return undefined;
  }
};

export const getAllUsers = async (): Promise<IUser[] | undefined> => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    return undefined;
  }
};

export const singleUser = async (id: string): Promise<IUser | null> => {
  try {
    const user = await User.findOne({ id: id });
    return user;
  } catch (err) {
    return null;
  }
};

export const getAllAdminUsers = async (): Promise<IUser[] | undefined> => {
  try {
    const users = await User.find({ role: "admin" });
    return users;
  } catch (err) {
    return undefined;
  }
};
