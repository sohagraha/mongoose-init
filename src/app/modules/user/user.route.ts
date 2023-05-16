import express from "express";
import { createNewUser, getUserById, getUsers } from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.post("/create-user", createNewUser);
router.get("/user", getUserById);

export default router;
