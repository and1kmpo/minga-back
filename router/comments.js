import { Router } from "express";
import all_from_chapter from "../controllers/comments/all_from_chapter.js";
import create from "../controllers/comments/create.js";
import update from "../controllers/comments/update.js";
import destroy from "../controllers/comments/destroy.js";
import passport from "../middlewares/passport.js";
import is_comment_of from "../middlewares/is_comment_of.js";


let commentsRouter = Router()

commentsRouter.post('/c',passport.authenticate('jwt', { session: false }), create)
commentsRouter.get('/',passport.authenticate('jwt', { session: false }), all_from_chapter)
commentsRouter.put('/:id',passport.authenticate('jwt', { session: false }), is_comment_of, update )
commentsRouter.delete('/:id',passport.authenticate('jwt', { session: false }), is_comment_of, destroy)

export default commentsRouter