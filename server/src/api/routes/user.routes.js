// src/api/routes/user.routes.js

import { Router } from "express";
import * as userControllers from "../controllers/user.controllers.js";

const userRoutes = Router();

userRoutes.post("/business", userControllers.createBusinessController);
userRoutes.post("/employee", userControllers.createEmployeeController);

userRoutes.get("/", userControllers.fetchAllUsersController);
userRoutes.get(
  "/distributors/approved",
  userControllers.fetchAllDistributorsController
);
userRoutes.get("/dealers/approved", userControllers.fetchAllDealersController);
userRoutes.get(
  "/technicians/approved",
  userControllers.fetchAllTechniciansController
);
userRoutes.get(
  "/backoffice/approved",
  userControllers.fetchAllBackofficeController
);

export default userRoutes;
