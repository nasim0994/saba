import { z } from 'zod';

export const brandValidation = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
});
