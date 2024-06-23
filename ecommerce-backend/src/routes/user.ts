import express from 'express';
import { newUser, getAllUsers,getUser, deleteUser } from '../controllers/user.js';

const app = express.Router();

app.post("/new", newUser);

app.get("/all", getAllUsers);

// app.get("/:id", getUser);
// app.delete("/:id", deleteUser);

app.route("/:id").get(getUser).delete(deleteUser);

export default app;