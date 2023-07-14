import { Router } from "express";
import Company from '../models/Company.js';
import create from "../controllers/companies/create.js";
import read from "../controllers/companies/read.js";
import update from "../controllers/companies/update.js";
import destroy from "../controllers/companies/destroy.js";
import validator from "../middlewares/validator.js";
import schema_create from "../schemas/companies/companies.js";
import passport from "passport";


let companiesRouter = Router();

companiesRouter.post('/',
passport.authenticate('jwt',{ session:false }),
validator(schema_create),
create);
companiesRouter.get('/',read);
companiesRouter.put('/:id', update);
companiesRouter.delete('/:id', destroy);

export default companiesRouter;