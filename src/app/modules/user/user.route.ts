import express from "express";
import { createNewUser, getUsers } from "./user.controller";
const router = express.Router();

router.get("/",getUsers );
router.post("/create-user", createNewUser);

export default router;
