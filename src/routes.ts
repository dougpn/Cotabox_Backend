import { Router } from "express";

import ParticipationController from "./controllers/ParticipationController";

const routes = Router();

routes.post("/findpart", ParticipationController.findall);
routes.post("/participation", ParticipationController.create);

export default routes;
