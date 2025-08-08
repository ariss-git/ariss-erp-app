// src/api/controllers/user.controllers.js

import * as userServices from "../services/user.services.js";
import * as userValidations from "../../validation/user.validation.js";

export const createBusinessController = async (req, res) => {
  const validatedUser = userValidations.createBusinessSchema.parse(req.body);
  try {
    const dealer = await userServices.createBusiness(
      validatedUser.mobile,
      validatedUser.email,
      validatedUser.name,
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
      validatedUser.name,
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

// Fetch everyone controller
export const fetchAllUsersController = async (_req, res) => {
  try {
    const users = await userServices.fetchAllUsers();
    res.status(200).json({ success: true, total: users.length, data: users });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Fetch all Distributors approved controller
export const fetchAllDistributorsController = async (_req, res) => {
  try {
    const users = await userServices.fetchAllDistributors();
    res.status(200).json({ success: true, total: users.length, data: users });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Fetch all Dealers approved controller
export const fetchAllDealersController = async (_req, res) => {
  try {
    const users = await userServices.fetchAllDealers();
    res.status(200).json({ success: true, total: users.length, data: users });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Fetch all Technicians approved controller
export const fetchAllTechniciansController = async (_req, res) => {
  try {
    const users = await userServices.fetchAllTechnicians();
    res.status(200).json({ success: true, total: users.length, data: users });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Fetch all Backoffice approved controller
export const fetchAllBackofficeController = async (_req, res) => {
  try {
    const users = await userServices.fetchAllBackoffice();
    res.status(200).json({ success: true, total: users.length, data: users });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
