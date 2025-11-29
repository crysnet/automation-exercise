import * as z from 'zod'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve(__dirname, '.env') })

const envSchema = z.object({
  TEST_BASE_URL: z.url('TEST_BASE_URL must be a valid URL'),
  HEADLESS: z
    .string()
    .optional()
    .default('true')
    .refine((val) => val === 'true' || val === 'false', {
      message: "HEADLESS must be 'true' or 'false'",
    })
    .transform((val) => val === 'true'),
  WORKERS: z
    .string()
    .optional()
    .default('1')
    .refine((val) => !isNaN(parseInt(val, 10)), {
      message: 'WORKERS must be a valid number',
    })
    .transform((val) => parseInt(val, 10)),
  RETRIES: z
    .string()
    .optional()
    .default('1')
    .refine((val) => !isNaN(parseInt(val, 10)), {
      message: 'RETRIES must be a valid number',
    })
    .transform((val) => parseInt(val, 10)),
})

const validateEnv = () => {
  try {
    return envSchema.parse(process.env)
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Error in environment variables:')
      error.issues.forEach((issue) => {
        console.error(`  - ${issue.path.join('.')}: ${issue.message}`)
      })
      process.exit(1)
    }
    throw error
  }
}

const env = validateEnv()

export default env
