// src/api/routes/index.routes.js

import { Router } from "express";
import userRoutes from "./user.routes.js";

const apiRoutes = Router();

apiRoutes.use("/users", userRoutes);

export default apiRoutes;
