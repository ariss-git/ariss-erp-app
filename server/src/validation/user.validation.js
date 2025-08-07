// src/validation/user.validation.js

import { z } from "zod";

export const createBusinessSchema = z.object({
  mobile: z.number({
    required_error: "Mobile number is required",
    invalid_type_error: "Mobile must be a number",
  }),
  email: z.email("Invalid email"),
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
  mobile: z.number({
    required_error: "Mobile number is required",
    invalid_type_error: "Mobile must be a number",
  }),
  email: z.email("Invalid email"),
  business: z.string({
    required_error: "Business name is required",
  }),
  userType: z.enum(["DEALER", "DISTRIBUTOR", "TECHNICIAN", "BACKOFFICE"], {
    required_error: "User type is required",
  }),
  dealerId: z.string({
    required_error: "Dealer ID is required",
  }),
});
