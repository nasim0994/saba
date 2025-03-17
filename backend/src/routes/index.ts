import { Router } from 'express';
const router = Router();
import { authRoute } from '../modules/auth/authRoute';
import { userRoute } from '../modules/user/userRoute';
import { adminRoute } from '../modules/admin/adminRoute';
import { CategoryRoute } from '../modules/category/categoryRoute';
import { subCategoryRoute } from '../modules/subCategory/subCategoryRoute';
import { subSubCategoryRoute } from '../modules/subSubCategory/subSubCategoryRoute';
import { brandRoute } from '../modules/brand/brandRoute';

const moduleRoutes = [
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/admin',
    route: adminRoute,
  },
  {
    path: '/category',
    route: CategoryRoute,
  },
  {
    path: '/sub-category',
    route: subCategoryRoute,
  },
  {
    path: '/sub-sub-category',
    route: subSubCategoryRoute,
  },
  {
    path: '/brand',
    route: brandRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
