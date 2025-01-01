//task routes
import { create, findAll, findOne, update, remove } from "../controllers/task.controller.js";
import { Router } from 'express';
import auth from "../middlewares/auth.middleware.js";

const taskRouter = Router();

taskRouter.post('/',auth,create);
taskRouter.get('/',auth,findAll);
taskRouter.get('/:id',auth,findOne);
taskRouter.put('/:id',auth,update);
taskRouter.delete('/:id',auth,remove);

export default taskRouter;