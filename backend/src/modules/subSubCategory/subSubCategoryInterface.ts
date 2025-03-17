import { Types } from 'mongoose';

export type ISubSubCategory = {
  name: string;
  slug: string;
  category: Types.ObjectId;
  subCategory: Types.ObjectId;
};
