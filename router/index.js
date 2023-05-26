import { Router } from "express"
import authorsRouter from "./authors.js"
import authRouter from "./auth.js"
import mangasRouter from "./mangas.js"
import chaptersRouter from "./chapters.js"

let indexRouter = Router();

indexRouter.use("/authors", authorsRouter);
indexRouter.use("/auth", authRouter);
indexRouter.use("/mangas", mangasRouter);
indexRouter.use("/chapters", chaptersRouter);


export default indexRouter;
