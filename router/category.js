import { Router } from "express";
import Category from '../models/Category.js';
import create from "../controllers/categories/create.js";
import read from "../controllers/categories/read.js";
import update from "../controllers/categories/read.js";
import destroy from "../controllers/categories/read.js";

let authorsRouter = Router();

authorsRouter.post('/',create);
authorsRouter.get('/',read);
authorsRouter.put('/:id', update);
authorsRouter.delete('/:id', destroy);

export default authorsRouter;