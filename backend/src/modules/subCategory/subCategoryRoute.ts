import express from 'express';
const Router = express.Router();
import {
  createSubCategoryController,
  deleteSubCategoryController,
  getAllSubCategoryController,
  getSubCategoryByIdController,
  updateSubCategoryController,
} from './subCategoryController';
import { auth } from '../../middlewares/auth';
import verifyValidate from '../../middlewares/verifyValidate';
import {
  subCategoryValidation,
  updateSubCategoryValidation,
} from './subCategoryValidation';

Router.post(
  '/add',
  auth('admin', 'superAdmin'),
  verifyValidate(subCategoryValidation),
  createSubCategoryController,
);
Router.get('/all', getAllSubCategoryController);
Router.get('/:id', getSubCategoryByIdController);
Router.delete(
  '/delete/:id',
  auth('admin', 'superAdmin'),
  deleteSubCategoryController,
);
Router.patch(
  '/update/:id',
  auth('admin', 'superAdmin'),
  verifyValidate(updateSubCategoryValidation),
  updateSubCategoryController,
);

export const subCategoryRoute = Router;
