import AppError from '../../errors/AppError';
import fs from 'fs';
import httpStatus from 'http-status';
import { makeSlug } from '../../utils/makeSlug';
import { IBrand } from './brandInterface';
import { Brand } from './brandModel';

export const createBrandService = async (data: IBrand) => {
  const slug = makeSlug(data.name);
  const newData = {
    ...data,
    slug,
  };
  const result = await Brand.create(newData);
  return result;
};

export const getAllBrandService = async () => {
  const result = await Brand.find();
  return result;
};

export const getBrandByIdService = async (id: string) => {
  const result = await Brand.findById(id);
  return result;
};

export const updateBrandService = async (id: string, data: Partial<IBrand>) => {
  const isExist = await Brand.findById(id);

  if (!isExist && data?.icon) {
    fs.unlink(`${process.cwd()}/uploads/${data?.icon}`, (err) => {
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

  const result = await Brand.findByIdAndUpdate(id, newData, { new: true });

  if (result && data?.icon && isExist?.icon) {
    fs.unlink(`${process.cwd()}/uploads/${isExist?.icon}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
  }

  return result;
};

export const deleteBrandService = async (id: string) => {
  const result = await Brand.findByIdAndDelete(id);
  if (result?.icon) {
    fs.unlink(`${process.cwd()}/uploads/${result?.icon}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
  }
  return result;
};
