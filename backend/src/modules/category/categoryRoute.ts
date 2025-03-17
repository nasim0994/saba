import express, { NextFunction, Request, Response } from 'express';
const Router = express.Router();
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoryController,
  getCategoryByIdController,
  updateCategoryController,
} from './categoryController';
import { auth } from '../../middlewares/auth';
import verifyValidate from '../../middlewares/verifyValidate';
import { fileUploader } from '../../utils/fileUploader';
import {
  categoryValidation,
  updateCategoryValidation,
} from './categoryValidation';
const upload = fileUploader('category').single('image');

Router.post(
  '/add',
  auth('admin', 'superAdmin'),
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  verifyValidate(categoryValidation),
  createCategoryController,
);
Router.get('/all', getAllCategoryController);
Router.get('/:id', getCategoryByIdController);
Router.delete(
  '/delete/:id',
  auth('admin', 'superAdmin'),
  deleteCategoryController,
);
Router.patch(
  '/update/:id',
  auth('admin', 'superAdmin'),
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  verifyValidate(updateCategoryValidation),
  updateCategoryController,
);

export const CategoryRoute = Router;
