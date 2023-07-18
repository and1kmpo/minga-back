import { Router } from "express";
import create from "../controllers/mangas/create.js";
import read from "../controllers/mangas/read.js";
import read_one from '../controllers/mangas/read_one.js';
import update from "../controllers/mangas/read.js";
import destroy from "../controllers/mangas/read.js";
import passport from "../middlewares/passport.js";

let mangasRouter = Router();

mangasRouter.post('/',passport.authenticate('jwt',{ session:false }),create);
mangasRouter.get('/',passport.authenticate('jwt',{session:false}),read);
mangasRouter.get('/:id',passport.authenticate('jwt',{ session:false }),read_one)
mangasRouter.put('/:id', update);
mangasRouter.delete('/:id', destroy);


export default mangasRouter;