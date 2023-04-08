import { Router } from "express";
import userController from "../controllers/userController.ts";
import { validateSchema } from "../middleware/ValidateSchemas.ts";
import userSchemas from "../schemas/userSchemas.ts";

const userRoutes = Router();

userRoutes.get('/users', userController.getAll);
userRoutes.post('/users', validateSchema(userSchemas.createUserSchema), userController.create);
userRoutes.put('/users/:id', validateSchema(userSchemas.updateUserSchema), userController.update);
userRoutes.delete('/users/:id', userController.deleteUser);

export default userRoutes;