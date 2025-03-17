import { IUser } from '../modules/user/userInterface';
import { User } from '../modules/user/userModel';

const defaultAdmin: Partial<IUser> = {
  name: 'Admin',
  phone: '00000000000',
  email: 'admin@gmail.com',
  password: '12345678',
  role: 'superAdmin',
  isBlocked: false,
};

export const seedDefaultAdmin = async () => {
  const isSuperAdminExits = await User.findOne({ role: 'superAdmin' });

  if (!isSuperAdminExits) {
    const result = await User.create(defaultAdmin);
    if (result) {
      // eslint-disable-next-line no-console
      console.log('Default admin created successfully');
    }
  }
};
