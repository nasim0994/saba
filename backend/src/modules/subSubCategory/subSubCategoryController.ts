import {
  createSubSubCategoryService,
  deleteSubSubCategoryService,
  getAllSubSubCategoryService,
  getSubSubCategoryByIdService,
  updateSubSubCategoryService,
} from './subSubCategoryService';
import { catchAsync } from '../../utils/catchAsync';

export const createSubSubCategoryController = catchAsync(async (req, res) => {
  const result = await createSubSubCategoryService(req.body);

  res.status(200).json({
    success: true,
    message: 'Sub subCategory created successfully',
    data: result,
  });
});

export const getAllSubSubCategoryController = catchAsync(async (req, res) => {
  const result = await getAllSubSubCategoryService();

  res.status(200).json({
    success: true,
    message: 'Sub subCategory fetched successfully',
    data: result,
  });
});

export const getSubSubCategoryByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSubSubCategoryByIdService(id);

  res.status(200).json({
    success: true,
    message: 'Sub subCategory fetched successfully',
    data: result,
  });
});

export const updateSubSubCategoryController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await updateSubSubCategoryService(id, req.body);

  res.status(200).json({
    success: true,
    message: 'Sub subCategory updated successfully',
    data: result,
  });
});

export const deleteSubSubCategoryController = catchAsync(async (req, res) => {
  const { id } = req.params;
  await deleteSubSubCategoryService(id);

  res.status(200).json({
    success: true,
    message: 'Sub subCategory deleted successfully',
  });
});
