import { CreateUser, GetUser } from "../protocols/user.ts";
import usersRepository from "../repository/userRepository.ts";
import bcrypt from 'bcrypt';

const getAll = async (): Promise<GetUser[]> => {
  const { rows: users } = await usersRepository.getAll();
  return users;
};

const create = async ({
  email,
  name,
  password,
  permissionLevel
}: CreateUser): Promise<void> => {
  const { rows: [user] } = await usersRepository.getByEmail(email);

  if (user) throw new Error('Usuário já existe.');

  const hashPassword = await bcrypt.hash(password, 10);

  await usersRepository.create({
    name,
    email,
    permissionLevel,
    password: hashPassword
  });
};

const update = async ({
  email,
  id,
  name,
  permissionLevel
}: GetUser): Promise<void> => {
  const { rows: [user] } = await usersRepository.getById(id);

  if (!user) throw new Error('Usuário não encontrado');

  await usersRepository.update({
    id,
    name,
    permissionLevel,
    email
  });
};

const deleteUser = async (id: number): Promise<void> => {
  const { rows: [user] } = await usersRepository.getById(id);
  if (!user) throw new Error('Usuário não existe');

  await usersRepository.deleteUser(id);
};

export default {
  getAll,
  create,
  update,
  deleteUser
};