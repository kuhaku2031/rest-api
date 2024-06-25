import { Router } from "express";
import { getAllUsers, getUser, getUsersByName, createUser, updateUser, deleteUser } from "../controllers/users.controllers.js";

const router = Router();

router.get("/users", getAllUsers);

router.get("/users/:userId", getUser);

router.get("/users/name/:name", getUsersByName);

router.post("/users", createUser);

router.patch("/users/:id", updateUser);

router.delete("/users/:userId", deleteUser);

export default router;
