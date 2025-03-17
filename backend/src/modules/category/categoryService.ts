import AppError from '../../errors/AppError';
import fs from 'fs';
import httpStatus from 'http-status';
import { ICategory } from './categoryInterface';
import { Category } from './categoryModel';
import { makeSlug } from '../../utils/makeSlug';

export const createCategoryService = async (data: ICategory) => {
  const slug = makeSlug(data.name);
  const newData = {
    ...data,
    slug,
  };
  const result = await Category.create(newData);
  return result;
};

export const getAllCategoryService = async () => {
  const result = await Category.find();
  return result;
};

export const getCategoryByIdService = async (id: string) => {
  const result = await Category.findById(id);
  return result;
};

export const updateCategoryService = async (
  id: string,
  data: Partial<ICategory>,
) => {
  const isExist = await Category.findById(id);

  if (!isExist && data?.image) {
    fs.unlink(`${process.cwd()}/uploads/${data?.image}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
    throw new AppError(httpStatus.NOT_FOUND, 'Car not found');
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

  const result = await Category.findByIdAndUpdate(id, newData, { new: true });

  if (result && data?.image && isExist?.image) {
    fs.unlink(`${process.cwd()}/uploads/${isExist?.image}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
  }

  return result;
};

export const deleteCategoryService = async (id: string) => {
  const result = await Category.findByIdAndDelete(id);
  if (result?.image) {
    fs.unlink(`${process.cwd()}/uploads/${result?.image}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
  }
  return result;
};
