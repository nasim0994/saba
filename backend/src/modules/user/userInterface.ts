export type IUser = {
  name: string;
  image: string;
  phone: string;
  email: string;
  password: string;
  role: 'superAdmin' | 'admin' | 'user';
  address: {
    city: string;
    area: string;
    street: string;
  };
  isBlocked: boolean;
};
