import {
  createBrandService,
  deleteBrandService,
  getAllBrandService,
  getBrandByIdService,
  updateBrandService,
} from './brandService';
import { catchAsync } from '../../utils/catchAsync';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import fs from 'fs';

export const createBrandController = catchAsync(async (req, res, next) => {
  const image: string | undefined = req?.file?.filename;
  if (!image) throw new AppError(httpStatus.NOT_FOUND, 'image is required !');

  const data = {
    ...req.body,
    icon: `/brand/${image}`,
  };

  try {
    const result = await createBrandService(data);

    res.status(200).json({
      success: true,
      message: 'Brand created successfully',
      data: result,
    });
  } catch (error) {
    fs.unlink(`${process.cwd()}/uploads/brand/${image}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
    next(error);
  }
});

export const getAllBrandController = catchAsync(async (req, res) => {
  const result = await getAllBrandService();

  res.status(200).json({
    success: true,
    message: 'Brand fetched successfully',
    data: result,
  });
});

export const getBrandByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getBrandByIdService(id);

  res.status(200).json({
    success: true,
    message: 'Brand fetched successfully',
    data: result,
  });
});

export const updateBrandController = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const image: string | undefined = req?.file?.filename;
  const data = {
    ...req.body,
    icon: image ? `/brand/${image}` : undefined,
  };

  try {
    const result = await updateBrandService(id, data);

    res.status(200).json({
      success: true,
      message: 'Brand updated successfully',
      data: result,
    });
  } catch (error) {
    if (image) {
      fs.unlink(`${process.cwd()}/uploads/brand/${image}`, (err) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      });
    }
    next(error);
  }
});

export const deleteBrandController = catchAsync(async (req, res) => {
  const { id } = req.params;
  await deleteBrandService(id);

  res.status(200).json({
    success: true,
    message: 'Brand deleted successfully',
  });
});
