import express from "express";
import { createNewUser } from "./user.controller";
const router = express.Router();

router.get("/", createNewUser);

export default router;
