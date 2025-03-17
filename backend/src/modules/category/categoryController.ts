import {
  createCategoryService,
  deleteCategoryService,
  getAllCategoryService,
  getCategoryByIdService,
  updateCategoryService,
} from './categoryService';
import { catchAsync } from '../../utils/catchAsync';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import fs from 'fs';

export const createCategoryController = catchAsync(async (req, res, next) => {
  const image: string | undefined = req?.file?.filename;
  if (!image) throw new AppError(httpStatus.NOT_FOUND, 'image is required !');

  const data = {
    ...req.body,
    image: `/category/${image}`,
  };

  try {
    const result = await createCategoryService(data);

    res.status(200).json({
      success: true,
      message: 'Category created successfully',
      data: result,
    });
  } catch (error) {
    fs.unlink(`${process.cwd()}/uploads/category/${image}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
    next(error);
  }
});

export const getAllCategoryController = catchAsync(async (req, res) => {
  const result = await getAllCategoryService();

  res.status(200).json({
    success: true,
    message: 'Category fetched successfully',
    data: result,
  });
});

export const getCategoryByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getCategoryByIdService(id);

  res.status(200).json({
    success: true,
    message: 'Category fetched successfully',
    data: result,
  });
});

export const updateCategoryController = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const image: string | undefined = req?.file?.filename;
  const data = {
    ...req.body,
    image: image ? `/category/${image}` : undefined,
  };

  try {
    const result = await updateCategoryService(id, data);

    res.status(200).json({
      success: true,
      message: 'Category updated successfully',
      data: result,
    });
  } catch (error) {
    if (image) {
      fs.unlink(`${process.cwd()}/uploads/Category/${image}`, (err) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      });
    }
    next(error);
  }
});

export const deleteCategoryController = catchAsync(async (req, res) => {
  const { id } = req.params;
  await deleteCategoryService(id);

  res.status(200).json({
    success: true,
    message: 'category deleted successfully',
  });
});
