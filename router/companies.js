import { Router } from "express";
import Company from '../models/Company.js';
import create from "../controllers/companies/create.js";
import read from "../controllers/companies/read.js";
import update from "../controllers/companies/read.js";
import destroy from "../controllers/companies/read.js";

let companiesRouter = Router();

companiesRouter.post('/',create);
companiesRouter.get('/',read);
companiesRouter.put('/:id', update);
companiesRouter.delete('/:id', destroy);

export default companiesRouter;