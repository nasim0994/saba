import { Schema, model } from 'mongoose';
import { ICategory } from './categoryInterface';

const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
});

export const Category = model<ICategory>('Category', categorySchema);
