import { Router } from "express";
import create from "../controllers/authors/create.js";
import read from "../controllers/authors/read.js";
import update from "../controllers/authors/update.js";
import destroy from "../controllers/authors/destroy.js";

let authorsRouter = Router();

authorsRouter.post('/',create);
authorsRouter.get('/',read);
authorsRouter.put('/:id', update);
authorsRouter.delete('/:id', destroy);

export default authorsRouter;