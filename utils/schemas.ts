import { NextResponse } from 'next/server';
import { registerUser } from '@/utils/actions';
import * as z from 'zod';

// Zod schema for profile validation
export const profileSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters long',
  }),
  email: z.string().email({
    message: 'Invalid email address',
  }),
  password: z.string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .regex(/[A-Z]/, { message: 'Password must include at least one uppercase letter' })
    .regex(/[a-z]/, { message: 'Password must include at least one lowercase letter' })
    .regex(/[0-9]/, { message: 'Password must include at least one number' })
    .regex(/[^a-zA-Z0-9]/, { message: 'Password must include at least one special character' }),
});

// Function to validate data with Zod schema
export function validateWithZod<T>(schema: z.ZodSchema<T>, data: unknown): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(','));
  }

  return result.data;
}