import { list } from "@src/controller";
import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", list);

export default indexRouter;
