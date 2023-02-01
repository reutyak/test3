// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import dal_mysql from '../Utils/dal_mysql';
import teamLogic from '../Logic/teamLogic';

const teamController = express.Router();

teamController.get("/all", async (request: Request, response: Response, next: NextFunction) => {
    //get all devices
    response.status(200).json(await teamLogic.getAllTeam());
  })
 

export default teamController;


