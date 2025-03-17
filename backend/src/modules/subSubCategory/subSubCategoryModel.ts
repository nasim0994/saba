import { Schema, model } from 'mongoose';
import { ISubSubCategory } from './subSubCategoryInterface';

const subSubCategorySchema = new Schema<ISubSubCategory>({
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
    required: true,
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true,
  },
});

export const SubSubCategory = model<ISubSubCategory>(
  'SubSubCategory',
  subSubCategorySchema,
);
