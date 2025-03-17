import { z } from 'zod';

export const subCategoryValidation = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  category: z.string().nonempty({ message: 'Category is required' }),
});

export const updateSubCategoryValidation = subCategoryValidation.partial();
