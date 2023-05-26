import { Router } from "express";
import Chapter from '../models/Chapter.js';
import create from "../controllers/chapters/create.js";
import read from "../controllers/chapters/read.js";
import update from "../controllers/chapters/read.js";
import destroy from "../controllers/chapters/read.js";

let chaptersRouter = Router();

chaptersRouter.post('/',create);
chaptersRouter.get('/',read);
chaptersRouter.put('/:id', update);
chaptersRouter.delete('/:id', destroy);

export default chaptersRouter;