import { Request, Response } from "express";
import User from "../services/User.ts";

const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const users = await User.getAll();
    return res.send(users);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Problemas com o servidor');
  }
};

const create = async (req: Request, res: Response): Promise<Response> => {
  const { body } = req;
  try {
    await User.create(body);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Problemas com o servidor');
  }
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const { body, params: { id } } = req;
  try {
    await User.update({ ...body, id: Number(id) });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Problemas com o servidor');
  }
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    await User.deleteUser(Number(id));
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Problemas com o servidor');
  }
};

export default {
  getAll,
  create,
  update,
  deleteUser
};