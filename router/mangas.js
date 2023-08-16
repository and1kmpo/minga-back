import { Router } from "express";
// controllers
import create from "../controllers/mangas/create.js";
import read from "../controllers/mangas/read.js";
import read_one from "../controllers/mangas/read_one.js";
import passport from "../middlewares/passport.js";
import update from "../controllers/mangas/update.js";
import validator from "../middlewares/validator.js";
import isActive from "../middlewares/isActive.js";
// schemas
import schema from "../schemas/mangas/create.js";

// M09
import read_news from "../controllers/mangas/read_news.js";
import has_permition from "../middlewares/has_permition.js";

// M10
import read_me from "../controllers/mangas/read_me.js";

let mangasRouter = Router();

// M10
mangasRouter.get('/me', passport.authenticate("jwt", {session:false}), has_permition, read_me)

mangasRouter.get(
  "/news",
  passport.authenticate("jwt", { session: false }),
  has_permition,
  read_news
);
mangasRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  has_permition,
  read_news
);
mangasRouter.post("/",passport.authenticate("jwt", { session: false }),validator(schema),
  has_permition,
  isActive,
  create
);
mangasRouter.get("/", passport.authenticate("jwt", { session: false }), read);
mangasRouter.get("/:id", passport.authenticate("jwt", { session: false }), read_one);
mangasRouter.put("/:id", update);
// mangasRouter.delete("/:id", destroy);


export default mangasRouter;
