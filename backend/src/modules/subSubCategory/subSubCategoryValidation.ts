import { z } from 'zod';

export const subSubCategoryValidation = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  category: z.string().nonempty({ message: 'Category is required' }),
  subCategory: z.string().nonempty({ message: 'SubCategory is required' }),
});

export const updateSubSubCategoryValidation =
  subSubCategoryValidation.partial();
