import { QueryResult } from "pg";
import db from "../config/db.connection.ts";
import { GetUser, CreateUser } from "../protocols/user.ts";

const getAll = async (): Promise<QueryResult<GetUser>> => {
  return await db.query('SELECT id, name, email, "permissionLevel" FROM users');
};

const getByEmail = async (email: string): Promise<QueryResult<GetUser>> => {
  return await db.query(`
    SELECT id, name, email, "permissionLevel" FROM users
    WHERE email = $1 
  `,
    [email]);
};

const getById = async (id: number): Promise<QueryResult<GetUser>> => {
  return await db.query(`
    SELECT id, name, email, "permissionLevel" FROM users
    WHERE id = $1 
  `,
    [id]);
};

const create = async ({
  email,
  name,
  password,
  permissionLevel
}: CreateUser): Promise<QueryResult> => {
  return await db.query(`
    INSERT INTO users (name, email, password, "permissionLevel")
    VALUES ($1, $2, $3, $4)  
  `,
    [name, email, password, permissionLevel]);
};

const update = async ({
  id,
  email,
  name,
  permissionLevel
}: GetUser): Promise<QueryResult> => {
  return await db.query(`
    UPDATE users
    SET name = $1, email = $2, "permissionLevel" = $3
    WHERE id = $4
  `,
    [name, email, permissionLevel, id]);
};

const deleteUser = async (id: number): Promise<QueryResult> => {
  return await db.query(`
    DELETE FROM users WHERE id = $1
  `,
    [id]);
};

export default {
  getAll,
  getByEmail,
  create,
  update,
  getById,
  deleteUser
};