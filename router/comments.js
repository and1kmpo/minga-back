import { Router } from "express";
import create from "../controllers/comments/create.js";
import all_from_chapters from "../controllers/comments/all_from_chapters.js";
import update from "../controllers/comments/update.js";
import destroy from "../controllers/comments/destroy.js";
import passport from "../middlewares/passport.js";
import online from "../middlewares/online.js";
import is_comment_of from "../middlewares/is_comment_of.js";


let commentsRouter = Router()

commentsRouter.post('/',passport.authenticate('jwt', { session: false }), online, create)
commentsRouter.get('/',passport.authenticate('jwt', { session: false }), all_from_chapters)
commentsRouter.put('/:id',passport.authenticate('jwt', { session: false }), is_comment_of, update )
commentsRouter.delete('/:id',passport.authenticate('jwt', { session: false }), is_comment_of, destroy)

export default commentsRouter