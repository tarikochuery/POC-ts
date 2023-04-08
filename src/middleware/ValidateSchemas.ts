import { NextFunction, Request, RequestHandler, Response } from "express";
import { ObjectSchema } from "joi";

export const validateSchema = (schema: ObjectSchema): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): Response | void => {
    const { body } = req;
    const { error } = schema.validate(body, { abortEarly: false });
    if (error) {
      return res.status(422).send(error.details.map(detail => detail.message));
    }
    next();
  };
};