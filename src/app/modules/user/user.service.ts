import User from "./user.model";

export const createUser = async () => {
  try {
    const user = new User({
      id: "6",
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
    return user;
  } catch (err) {
    return undefined
  }
};
