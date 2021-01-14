import { Request, Response } from "express";

import Participation from "../schemas/Participation";

class ParticipationController {
  public async findall(req: Request, res: Response) {

    Participation.find({})
      .then((data) => {
        if (data.length === 0)
          res.status(404).send({ message: "Ocorreu um problema "});
        else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Ocorreu um problema" });
      });
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const participation = await Participation.create(req.body);
    return res.json(participation);
  }
}

export default new ParticipationController();
