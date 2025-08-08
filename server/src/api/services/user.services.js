// src/api/services/user.services.js

import { prisma } from "../../lib/prismaInstance.js";
import { user_type } from "@prisma/client";

// Create Dealer and Distribtor User
export const createBusiness = async (
  mobile,
  email,
  name,
  business,
  gstin,
  billingAddress,
  shippingAddress,
  userType
) => {
  // Check if dealer exists
  const existingDealer = await prisma.user.findUnique({
    where: { email },
  });

  // If dealer exists throw error
  if (existingDealer) throw new Error("User already exists");

  // Create dealer
  const dealer = await prisma.user.create({
    data: {
      mobile,
      email,
      name,
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
export const createEmployee = async (
  mobile,
  email,
  name,
  userType,
  dealerId
) => {
  // Check if employee exists
  const existingEmployee = await prisma.user.findUnique({
    where: { email },
  });

  // If employee exists throw error
  if (existingEmployee) throw new Error("User already exists");

  // Create Employee
  const employee = await prisma.user.create({
    data: {
      mobile,
      email,
      name,
      user_type: userType,
      dealer_id: dealerId,
    },
  });

  return employee;
};

// Fetch everyone
export const fetchAllUsers = async () => {
  return await prisma.user.findMany({
    include: {
      dealer: true,
    },
  });
};

// Fetch all approved Distributors
export const fetchAllDistributors = async () => {
  return await prisma.user.findMany({
    where: {
      user_type: user_type.DISTRIBUTOR,
    },
  });
};

// Fetch all approved Dealers
export const fetchAllDealers = async () => {
  return await prisma.user.findMany({
    where: {
      user_type: user_type.DEALER,
    },
  });
};

// Fetch all approved Technicians
export const fetchAllTechnicians = async () => {
  return await prisma.user.findMany({
    where: {
      user_type: user_type.TECHNICIAN,
    },
    include: {
      dealer: true,
    },
  });
};

// Fetch all approved Backoffice
export const fetchAllBackoffice = async () => {
  return await prisma.user.findMany({
    where: {
      user_type: user_type.BACKOFFICE,
    },
    include: {
      dealer: true,
    },
  });
};
