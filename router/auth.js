import { Router } from "express";
import User from "../models/User.js";
import create from "../controllers/auth/create.js";
import read from "../controllers/auth/read.js";
import update from "../controllers/auth/update.js";
import destroy from "../controllers/auth/destroy.js";

let authRouter = Router();

authRouter.post('/', create);
authRouter.get('/', read);
authRouter.put('/:id', update);
authRouter.delete('/:id', destroy);

export default authRouter;
