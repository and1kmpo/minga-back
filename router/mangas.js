import { Router } from "express";
import create from "../controllers/mangas/create.js";
import read from "../controllers/mangas/read.js";
import read_one from "../controllers/mangas/read_one.js";
import passport from "../middlewares/passport.js";
import update from "../controllers/mangas/update.js";
import destroy from "../controllers/auth/destroy.js";
import schema from "../schemas/mangas/create.js";
import validator from "../middlewares/validator.js";
import isActive from "../middlewares/isActive.js";

// M09
import read_news from "../controllers/mangas/read_news.js";
import has_permition from "../middlewares/has_permition.js";
let mangasRouter = Router();


mangasRouter.get( "/news",
  passport.authenticate("jwt", { session: false }),
  has_permition,
  read_news
);
mangasRouter.post("/",
  passport.authenticate("jwt", { session: false }),
  validator(schema),
  has_permition,
  isActive,
  create
);
mangasRouter.get("/", passport.authenticate("jwt", { session: false }), read);
mangasRouter.get("/:id", passport.authenticate("jwt", { session: false }), read_one);
mangasRouter.put("/:id", update);
mangasRouter.delete("/:id", destroy);

export default mangasRouter;
