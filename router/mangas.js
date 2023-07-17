import { Router } from "express";
// import Manga from '../models/Manga.js';
import create from "../controllers/mangas/create.js";
import read from "../controllers/mangas/read.js";
// import update from "../controllers/mangas/read.js";
// import destroy from "../controllers/mangas/read.js";
import passport from "passport"


let mangasRouter = Router();

mangasRouter.post('/',passport.authenticate('jwt',{ session:false }),create);
mangasRouter.get('/',read);
// mangasRouter.put('/:id', update);
// mangasRouter.delete('/:id', destroy);

export default mangasRouter;