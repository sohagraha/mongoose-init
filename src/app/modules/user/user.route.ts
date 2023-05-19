import express from "express";
import { createNewUser, getAdmiUsers, getUserById, getUsers } from "./user.controller";
const router = express.Router();

router.get("/admin", getAdmiUsers);
router.post("/create-user", createNewUser);
router.get("/:id", getUserById);
router.get("/", getUsers);

export default router;
