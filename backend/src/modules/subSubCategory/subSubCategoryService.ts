import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

import { makeSlug } from '../../utils/makeSlug';
import { ISubSubCategory } from './subSubCategoryInterface';
import { SubSubCategory } from './subSubCategoryModel';

export const createSubSubCategoryService = async (data: ISubSubCategory) => {
  const newData = {
    ...data,
    slug: makeSlug(data.name),
  };
  const result = await SubSubCategory.create(newData);
  return result;
};

export const getAllSubSubCategoryService = async () => {
  const result = await SubSubCategory.find();
  return result;
};

export const getSubSubCategoryByIdService = async (id: string) => {
  const result = await SubSubCategory.findById(id);
  return result;
};

export const updateSubSubCategoryService = async (
  id: string,
  data: Partial<ISubSubCategory>,
) => {
  const isExist = await SubSubCategory.findById(id);

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Sub Category not found');
  }

  let newData = {
    ...data,
  };

  if (data?.name) {
    newData = {
      ...data,
      slug: makeSlug(data.name),
    };
  }

  const result = await SubSubCategory.findByIdAndUpdate(id, newData, {
    new: true,
  });

  return result;
};

export const deleteSubSubCategoryService = async (id: string) => {
  const isExist = await SubSubCategory.findById(id);
  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Sub Category not found');
  }
  const result = await SubSubCategory.findByIdAndDelete(id);
  return result;
};
