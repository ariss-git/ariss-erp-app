// src/api/controllers/user.controllers.js

import * as userServices from "../services/user.services.js";
import * as userValidations from "../../validation/user.validation.js";

export const createBusinessController = async (req, res) => {
  const validatedUser = userValidations.createBusinessSchema.parse(req.body);
  try {
    const dealer = await userServices.createBusiness(
      validatedUser.mobile,
      validatedUser.email,
      validatedUser.business,
      validatedUser.gstin,
      validatedUser.billingAddress,
      validatedUser.shippingAddress,
      validatedUser.userType
    );

    res.status(201).json({
      success: true,
      message: "Business dealer created",
      data: dealer,
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors.map((e) => e.message),
      });
    }

    res.status(500).json({ success: false, message: error.message });
  }
};

export const createEmployeeController = async (req, res) => {
  const validatedUser = userValidations.createEmployeeSchema.parse(req.body);

  try {
    const employee = await userServices.createEmployee(
      validatedUser.mobile,
      validatedUser.email,
      validatedUser.userType,
      validatedUser.dealerId
    );

    res.status(201).json({
      success: true,
      message: "Business employee created",
      data: employee,
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors.map((e) => e.message),
      });
    }

    res.status(500).json({ success: false, message: error.message });
  }
};
