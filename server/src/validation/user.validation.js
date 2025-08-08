// src/validation/user.validation.js

import { z } from "zod";

export const createBusinessSchema = z.object({
  mobile: z.string({
    required_error: "Mobile number is required",
  }),
  email: z.string("Invalid email"),
  name: z.string("Invalid name"),
  business: z.string({
    required_error: "Business name is required",
  }),
  gstin: z.string({
    required_error: "GSTIN is required",
  }),
  billingAddress: z.any({
    required_error: "Billing address is required",
  }),
  shippingAddress: z.any({
    required_error: "Shipping address is required",
  }),
  userType: z.enum(["DEALER", "DISTRIBUTOR", "TECHNICIAN", "BACKOFFICE"], {
    required_error: "User type is required",
  }),
});

export const createEmployeeSchema = z.object({
  mobile: z.string({
    required_error: "Mobile number is required",
  }),
  email: z.string("Invalid email"),
  name: z.string("Invalid name"),
  userType: z.enum(["DEALER", "DISTRIBUTOR", "TECHNICIAN", "BACKOFFICE"], {
    required_error: "User type is required",
  }),
  dealerId: z.string({
    required_error: "Dealer ID is required",
  }),
});
