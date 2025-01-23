import { User } from '../types/user';

const users: User[] = [];

export const getAllUsers = (): User[] => users;

export const createUser = (user: User): User => {
  users.push(user);
  return user;
};
