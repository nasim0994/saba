import { Schema, model } from 'mongoose';
import { ISubCategory } from './subCategoryInterface';

const subCategorySchema = new Schema<ISubCategory>({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
});

export const SubCategory = model<ISubCategory>(
  'SubCategory',
  subCategorySchema,
);
