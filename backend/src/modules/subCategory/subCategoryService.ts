import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { ISubCategory } from './subCategoryInterface';
import { SubCategory } from './subCategoryModel';
import { makeSlug } from '../../utils/makeSlug';

export const createSubCategoryService = async (data: ISubCategory) => {
  const newData = {
    ...data,
    slug: makeSlug(data.name),
  };
  const result = await SubCategory.create(newData);
  return result;
};

export const getAllSubCategoryService = async () => {
  const result = await SubCategory.find();
  return result;
};

export const getSubCategoryByIdService = async (id: string) => {
  const result = await SubCategory.findById(id);
  return result;
};

export const updateSubCategoryService = async (
  id: string,
  data: Partial<ISubCategory>,
) => {
  const isExist = await SubCategory.findById(id);

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

  const result = await SubCategory.findByIdAndUpdate(id, newData, {
    new: true,
  });

  return result;
};

export const deleteSubCategoryService = async (id: string) => {
  const isExist = await SubCategory.findById(id);
  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Sub Category not found');
  }
  const result = await SubCategory.findByIdAndDelete(id);
  return result;
};
