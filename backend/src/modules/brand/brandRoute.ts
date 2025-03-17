import express, { NextFunction, Request, Response } from 'express';
const Router = express.Router();
import {
  createBrandController,
  deleteBrandController,
  getAllBrandController,
  getBrandByIdController,
  updateBrandController,
} from './brandController';
import { auth } from '../../middlewares/auth';
import verifyValidate from '../../middlewares/verifyValidate';
import { fileUploader } from '../../utils/fileUploader';
import { brandValidation } from './brandValidation';
const upload = fileUploader('brand').single('icon');

Router.post(
  '/add',
  auth('admin', 'superAdmin'),
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  verifyValidate(brandValidation),
  createBrandController,
);
Router.get('/all', getAllBrandController);
Router.get('/:id', getBrandByIdController);
Router.delete(
  '/delete/:id',
  auth('admin', 'superAdmin'),
  deleteBrandController,
);
Router.patch(
  '/update/:id',
  auth('admin', 'superAdmin'),
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  verifyValidate(brandValidation),
  updateBrandController,
);

export const brandRoute = Router;
