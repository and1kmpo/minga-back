import { Router } from "express";
import Author from '../models/Author.js';
import create from "../controllers/authors/create.js";
import read from "../controllers/authors/read.js";
import update from "../controllers/authors/read.js";
import destroy from "../controllers/authors/read.js";

let authorsRouter = Router();

authorsRouter.post('/',create);
authorsRouter.get('/',read);
authorsRouter.put('/:id', update);
authorsRouter.delete('/:id', destroy);

export default authorsRouter;