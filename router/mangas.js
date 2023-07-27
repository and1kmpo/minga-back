import { Router } from "express";
import create from "../controllers/mangas/create.js";
import read from "../controllers/mangas/read.js";
import read_one from "../controllers/mangas/read_one.js";
import update from "../controllers/mangas/update.js";
import destroy from "../controllers/mangas/destroy.js";
import passport from "passport";
import schema from "../schemas/mangas/create.js";
import has_permition from "../middlewares/has_permition.js";
import validator from "../middlewares/validator.js";
import isActive from "../middlewares/isActive.js";

let mangasRouter = Router();

mangasRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validator(schema),
  has_permition,
  isActive,
  create
);
mangasRouter.get("/", passport.authenticate("jwt", { session: false }), read);
mangasRouter.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  read_one
);
mangasRouter.put("/:id", update);
mangasRouter.delete("/:id", destroy);

export default mangasRouter;
