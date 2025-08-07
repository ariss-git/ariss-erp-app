// src/api/services/user.services.js

import { prisma } from "../../lib/prismaInstance.js";

// Create Dealer and Distribtor User
export const createBusiness = async (
  mobile,
  email,
  business,
  gstin,
  billingAddress,
  shippingAddress,
  userType
) => {
  // Check if dealer exists
  const existingDealer = await prisma.user.findUnique({
    where: email,
  });

  // If dealer exists throw error
  if (existingDealer) throw new Error("User already exists");

  // Create dealer
  const dealer = await prisma.user.create({
    data: {
      mobile,
      email,
      business,
      gstin,
      billing_address: billingAddress,
      shipping_address: shippingAddress,
      user_type: userType,
    },
  });

  return dealer;
};

// Create Technician and Backoffice User
export const createEmployee = async (mobile, email, userType, dealerId) => {
  // Check if employee exists
  const existingEmployee = await prisma.user.findUnique({
    where: email,
  });

  // If employee exists throw error
  if (existingEmployee) throw new Error("User already exists");

  // Create Employee
  const employee = await prisma.user.create({
    data: {
      mobile,
      email,
      user_type: userType,
      dealer_id: dealerId,
    },
  });

  return employee;
};
