import * as bcrypt from 'bcryptjs';

export const getPrismaService = () => {};

export const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, 10);
};
