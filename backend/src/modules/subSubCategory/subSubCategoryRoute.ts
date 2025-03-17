import express from 'express';
const Router = express.Router();
import {
  createSubSubCategoryController,
  deleteSubSubCategoryController,
  getAllSubSubCategoryController,
  getSubSubCategoryByIdController,
  updateSubSubCategoryController,
} from './subSubCategoryController';
import { auth } from '../../middlewares/auth';
import verifyValidate from '../../middlewares/verifyValidate';
import {
  subSubCategoryValidation,
  updateSubSubCategoryValidation,
} from './subSubCategoryValidation';

Router.post(
  '/add',
  auth('admin', 'superAdmin'),
  verifyValidate(subSubCategoryValidation),
  createSubSubCategoryController,
);
Router.get('/all', getAllSubSubCategoryController);
Router.get('/:id', getSubSubCategoryByIdController);
Router.delete(
  '/delete/:id',
  auth('admin', 'superAdmin'),
  deleteSubSubCategoryController,
);
Router.patch(
  '/update/:id',
  auth('admin', 'superAdmin'),
  verifyValidate(updateSubSubCategoryValidation),
  updateSubSubCategoryController,
);

export const subSubCategoryRoute = Router;
