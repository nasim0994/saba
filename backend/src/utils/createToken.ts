import jwt, { JwtPayload } from 'jsonwebtoken';
import { Types } from 'mongoose';

export const createToken = (
  jwtPayload: {
    phone: string;
    role: string;
    name: string;
    _id: Types.ObjectId;
  },
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};
