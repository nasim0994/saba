import { Types } from 'mongoose';

export type ISubCategory = {
  name: string;
  slug: string;
  category: Types.ObjectId;
};
