export interface IUser {
  id: number;
  name: string;
  password: string;
  permissionLevel: 'admin' | 'user' | 'visitor';
  email: string;
}

export type CreateUser = Omit<IUser, 'id'>;

export type UpdateUser = Omit<IUser, 'password' | 'id'>;

export type GetUser = Omit<IUser, 'password'>;