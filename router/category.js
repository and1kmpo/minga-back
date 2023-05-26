import { Router } from "express";
import Category from '../models/Category.js';
import create from "../controllers/categories/create.js";
import read from "../controllers/categories/read.js";
import update from "../controllers/categories/read.js";
import destroy from "../controllers/categories/read.js";

let categoriesRouter = Router();

categoriesRouter.post('/',create);
categoriesRouter.get('/',read);
categoriesRouter.put('/:id', update);
categoriesRouter.delete('/:id', destroy);

export default categoriesRouter;