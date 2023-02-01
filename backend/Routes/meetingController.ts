import express, { NextFunction, Request, Response } from "express";
import meetingLogic from "../Logic/meetingLogic";


const meetingController = express.Router();

meetingController.post("/range", async (request: Request, response: Response, next: NextFunction)=>{
  const data = request.body

  response.status(200).json(await meetingLogic.getByRange(data))
});

meetingController.get("/:team",async (request: Request, response: Response, next: NextFunction) => {
        const team = +request.params.team
        response.status(200).json(await meetingLogic.getByTeam(team));
      })
    

meetingController.post("/", async (request:Request, response: Response, next: NextFunction)=>{
    const data = request.body
    response.status(201).json(await meetingLogic.addMeeting(data));
});



export default meetingController;


