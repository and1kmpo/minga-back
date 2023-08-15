import { Router } from "express";
import Company from "../models/Company.js";
import create from "../controllers/companies/create.js";
import read from "../controllers/companies/read.js";
import update from "../controllers/companies/update.js";
import destroy from "../controllers/companies/destroy.js";
import validator from "../middlewares/validator.js";
import schema_create from "../schemas/companies/companies.js";
import passport from "passport";
import has_permition from "../middlewares/has_permition.js";
import isAdmin from "../middlewares/isAdmin.js";
import admin from "../controllers/companies/admin.js";

let companiesRouter = Router();

companiesRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validator(schema_create),
  create
);
companiesRouter.get("/", read);

companiesRouter.get(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  admin
);

companiesRouter.put("/:id", update);
companiesRouter.delete("/:id", destroy);

export default companiesRouter;
