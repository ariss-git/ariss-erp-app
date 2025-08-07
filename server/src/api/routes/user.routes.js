// src/api/routes/user.routes.js

import { Router } from "express";
import * as userControllers from "../controllers/user.controllers.js";

const userRoutes = Router();

userRoutes.post("/business", userControllers.createBusinessController);
userRoutes.post("/employee", userControllers.createEmployeeController);

export default userRoutes;
