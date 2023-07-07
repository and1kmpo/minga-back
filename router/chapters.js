import { Router } from "express";
import Chapter from '../models/Chapter.js';
import create from "../controllers/chapters/create.js";
import read from "../controllers/chapters/read.js";
// import update from "../controllers/chapters/read.js";
// import destroy from "../controllers/chapters/read.js";
import passport  from "../middlewares/passport.js";
import exist_order from "../middlewares/exist_order.js";
import next_order from "../middlewares/next_order.js"
import add_cover_photo from "../middlewares/add_cover_photo.js";
import has_permition from "../middlewares/has_permition.js";
import isActive from "../middlewares/isActive.js";
import isPropertyOf from  "../middlewares/isPropertyOf.js";

let chaptersRouter = Router();

chaptersRouter.post('/',
    passport.authenticate("jwt", {session:false}), 
    exist_order, 
    next_order, 
    add_cover_photo, 
    has_permition,
    isActive,
    isPropertyOf,
create);
chaptersRouter.get('/',read);
// chaptersRouter.put('/:id', update);
// chaptersRouter.delete('/:id', destroy);

export default chaptersRouter;