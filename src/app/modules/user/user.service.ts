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
