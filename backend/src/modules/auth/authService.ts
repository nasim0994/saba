import config from '../../config';
import AppError from '../../errors/AppError';
import { createToken, verifyToken } from '../../utils/createToken';
import { User } from '../user/userModel';
import { ILoginUser } from './authInterface';
import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import { IUser } from '../user/userInterface';

export const createUserService = async (data: IUser) => {
  const result = await User.create({
    ...data,
    role: 'user',
  });
  return result;
};

export const loginUserService = async (payload: ILoginUser) => {
  // checking if the user is exist
  const user = await User.findOne({ phone: payload?.phone }).select(
    '+password',
  );

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  // checking if the user is blocked
  const isBlocked = user?.isBlocked;

  if (isBlocked) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked !');
  }

  //checking if the password is correct
  const isMatch = await bcrypt.compare(payload?.password, user?.password);

  if (!isMatch)
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  //create token and sent to the client
  const jwtPayload = {
    phone: user?.phone,
    role: user?.role,
    name: user?.name,
    _id: user?._id,
  };

  const accessToken = createToken(
    jwtPayload,
    config.JWT_ACCESS_SECRET as string,
    config.JWT_ACCESS_EXPIRES_IN as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.JWT_REFRESH_SECRET as string,
    config.JWT_REFRESH_EXPIRES_IN as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const refreshTokenService = async (token: string) => {
  // checking if the given token is valid
  const decoded = verifyToken(token, config.JWT_REFRESH_SECRET as string);

  const { phone } = decoded;

  // checking if the user is exist
  const user = await User.findOne({ phone });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  // checking if the user is blocked
  const isBlocked = user?.isBlocked;

  if (isBlocked) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
  }

  const jwtPayload = {
    phone: user.phone,
    role: user.role,
    name: user.name,
    _id: user._id,
  };

  const accessToken = createToken(
    jwtPayload,
    config.JWT_ACCESS_SECRET as string,
    config.JWT_ACCESS_EXPIRES_IN as string,
  );

  return {
    accessToken,
  };
};
