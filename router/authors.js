import { Router } from "express";
import passport from "passport";

// controllers
import create from "../controllers/authors/create.js";
import read from "../controllers/authors/read.js";
import admin from "../controllers/authors/admin.js";
//import update from "../controllers/authors/update.js";
//import destroy from "../controllers/authors/destroy.js";
import validator from "../middlewares/validator.js";
import schema_create from "../schemas/authors/create.js";

// M09-Endpoint
import read_one from "../controllers/authors/read_one.js";
import read_me from "../controllers/authors/read_me.js";
import has_permition from "../middlewares/has_permition.js";
import isAdmin from "../middlewares/isAdmin.js";

let authorsRouter = Router();

authorsRouter.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  has_permition,
  read_me
);

authorsRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validator(schema_create),
  create
);

authorsRouter.get("/", read);

authorsRouter.get(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  admin
);

authorsRouter.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  read_one
);
//authorsRouter.put('/:id', update);
//authorsRouter.delete('/:id', destroy);

authorsRouter.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  has_permition,
  read_me
);

authorsRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validator(schema_create),
  create
);

authorsRouter.get("/", read);

authorsRouter.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  read_one
);

export default authorsRouter;
