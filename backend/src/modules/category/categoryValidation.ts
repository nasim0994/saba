import { z } from 'zod';

export const categoryValidation = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  order: z
    .number()
    .int()
    .positive({ message: 'Order must be a positive integer' }),
});

export const updateCategoryValidation = categoryValidation.partial();
