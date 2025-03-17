import { Schema, model } from 'mongoose';
import { IBrand } from './brandInterface';

const brandSchema = new Schema<IBrand>({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

export const Brand = model<IBrand>('Brand', brandSchema);
