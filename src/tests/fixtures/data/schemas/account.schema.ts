import { z } from "zod";

export const accountSchema = z.object({
  title: z.string().min(1, "Title is required"),
  name: z.string().min(1, "Name is required"),
  email: z.email("Email must be valid"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  dateOfBirth: z.object({
    day: z.string().regex(/^\d{1,2}$/, "Day must be a valid number"),
    month: z.string().regex(/^\d{1,2}$/, "Month must be a valid number"),
    year: z.string().regex(/^\d{4}$/, "Year must be a valid 4-digit number"),
  }),
  address: z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    company: z.string().min(1, "Company is required"),
    address: z.string().min(1, "Address is required"),
    address2: z.string().optional(),
    country: z.string().min(1, "Country is required"),
    state: z.string().min(1, "State is required"),
    city: z.string().min(1, "City is required"),
    zipcode: z.string().min(1, "Zipcode is required"),
    mobileNumber: z
      .string()
      .regex(/^\+?[\d\s-()]+$/, "Mobile number must be valid"),
  }),
});

export type Account = z.infer<typeof accountSchema>;
