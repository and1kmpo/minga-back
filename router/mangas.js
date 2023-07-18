import { Router } from "express";
// import Manga from '../models/Manga.js';
import create from "../controllers/mangas/create.js";
import read from "../controllers/mangas/read.js";
// import update from "../controllers/mangas/read.js";
// import destroy from "../controllers/mangas/read.js";
import passport from "passport"
import schema from "../schemas/mangas/create.js";
import has_permition from "../middlewares/has_permition.js";
import validator from "../middlewares/validator.js";
import isActive from "../middlewares/isActive.js";




let mangasRouter = Router();

mangasRouter.post('/',passport.authenticate('jwt',{ session:false }),
validator(schema),
 has_permition,
 isActive,
  create);
mangasRouter.get('/',read);
// mangasRouter.put('/:id', update);
// mangasRouter.delete('/:id', destroy);

export default mangasRouter;