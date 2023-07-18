import { Router } from "express";
import Chapter from '../models/Chapter.js';
import create from "../controllers/chapters/create.js";
import read from "../controllers/chapters/read.js";
// import update from "../controllers/chapters/read.js";
// import destroy from "../controllers/chapters/read.js";
import passport from "../middlewares/passport.js";
import exist_order from "../middlewares/exist_order.js";
import next_order from "../middlewares/next_order.js"
import add_cover_photo from "../middlewares/add_cover_photo.js";
import has_permition from "../middlewares/has_permition.js";
import isActive from "../middlewares/isActive.js";
import is_property_of from "../middlewares/is_property_of.js";
import validator from "../middlewares/validator.js";
import create_schema from "../schemas/chapters/create.js";
import read_one from "../controllers/chapters/read_one.js";




let chaptersRouter = Router();

chaptersRouter.post('/',
    passport.authenticate("jwt", { session: false }), validator(create_schema),
    exist_order, next_order, add_cover_photo, has_permition, isActive, is_property_of, create);
chaptersRouter.get('/', read);
chaptersRouter.get('/:chapter_id', passport.authenticate('jwt', { session: false }), read_one)

// chaptersRouter.put('/:id', update);
// chaptersRouter.delete('/:id', destroy);

export default chaptersRouter;


