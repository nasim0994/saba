import { catchAsync } from '../../utils/catchAsync';
import { getAllUserService } from './userService';

export const getAllUserController = catchAsync(async (req, res) => {
  const result = await getAllUserService();

  res.status(200).json({
    success: true,
    message: 'all user get successfully',
    data: result,
  });
});
