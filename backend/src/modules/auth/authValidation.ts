import { z } from 'zod';

export const loginValidation = z.object({
  phone: z.string({ required_error: 'Phone Number is required' }),
  password: z.string({ required_error: 'Password is required' }),
});
