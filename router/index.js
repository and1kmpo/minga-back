import { Router } from "express";
import authorsRouter from "./authors.js";
import authRouter from "./auth.js";
import mangasRouter from "./mangas.js";
import chaptersRouter from "./chapters.js";
import categoriesRouter from "./category.js";
import companiesRouter from "./companies.js";

let indexRouter = Router();

indexRouter.use("/authors", authorsRouter);
indexRouter.use("/auth", authRouter);
indexRouter.use("/mangas", mangasRouter);
indexRouter.use("/chapters", chaptersRouter);
indexRouter.use("/categories", categoriesRouter);
indexRouter.use("/companies", companiesRouter);

export default indexRouter;
