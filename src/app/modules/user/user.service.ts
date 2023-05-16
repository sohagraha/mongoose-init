import IUser from "./user.interface";
import User from "./user.model";

export const createUser = async (
  payload: IUser
): Promise<IUser | undefined> => {
  try {
    const user = new User(payload);
    await user.save();
    console.log("User Created");
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
    const user = await User.findById(id);
    return user;
  } catch (err) {
    return null;
  }
};
