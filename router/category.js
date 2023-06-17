import { Router } from "express";
import read from "../controllers/categories/read.js";

const categoriesRouter = Router();

categoriesRouter.get("/", read);

export default categoriesRouter;
