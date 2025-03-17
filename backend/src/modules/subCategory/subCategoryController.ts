import {
  createSubCategoryService,
  deleteSubCategoryService,
  getAllSubCategoryService,
  getSubCategoryByIdService,
  updateSubCategoryService,
} from './subCategoryService';
import { catchAsync } from '../../utils/catchAsync';

export const createSubCategoryController = catchAsync(async (req, res) => {
  const result = await createSubCategoryService(req.body);

  res.status(200).json({
    success: true,
    message: 'Sub Category created successfully',
    data: result,
  });
});

export const getAllSubCategoryController = catchAsync(async (req, res) => {
  const result = await getAllSubCategoryService();

  res.status(200).json({
    success: true,
    message: 'Sub Category fetched successfully',
    data: result,
  });
});

export const getSubCategoryByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSubCategoryByIdService(id);

  res.status(200).json({
    success: true,
    message: 'Sub Category fetched successfully',
    data: result,
  });
});

export const updateSubCategoryController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await updateSubCategoryService(id, req.body);

  res.status(200).json({
    success: true,
    message: 'Sub Category updated successfully',
    data: result,
  });
});

export const deleteSubCategoryController = catchAsync(async (req, res) => {
  const { id } = req.params;
  await deleteSubCategoryService(id);

  res.status(200).json({
    success: true,
    message: 'Sub Category deleted successfully',
  });
});
