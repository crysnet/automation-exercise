import * as z from "zod";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

const envSchema = z.object({
  TEST_BASE_URL: z.url("TEST_BASE_URL must be a valid URL"),
  TEST_USERNAME: z
    .string({ message: "TEST_USERNAME is required" })
    .min(1, "TEST_USERNAME cannot be empty"),
  TEST_PASSWORD: z
    .string({ message: "TEST_PASSWORD is required" })
    .min(1, "TEST_PASSWORD cannot be empty"),
  HEADLESS: z
    .string()
    .optional()
    .default("true")
    .refine((val) => val === "true" || val === "false", {
      message: "HEADLESS must be 'true' or 'false'",
    })
    .transform((val) => val === "true"),
});

const validateEnv = () => {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Error in environment variables:");
      error.issues.forEach((issue) => {
        console.error(`  - ${issue.path.join(".")}: ${issue.message}`);
      });
      process.exit(1);
    }
    throw error;
  }
};

const env = validateEnv();

export default env;
