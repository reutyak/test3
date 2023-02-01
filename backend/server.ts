//it's just example init you have to change as needed
import { create_meetingTable, create_teamsTable, initteamsTable } from "./Utils/init";
import cors from "cors";
import express from "express";
import ErrorHandler from "./MiddleWare/route-not-found";
import config from "./Utils/config";
import dal_mysql from "./Utils/dal_mysql";
import firstController from "./Routes/teamController";
import secondController from "./Routes/meetingController";
import meetingController from "./Routes/meetingController";
import teamController from "./Routes/teamController";

dal_mysql.execute(create_teamsTable);
dal_mysql.execute(create_meetingTable);
const server = express();
const currentPort = config.port;
server.use(express.json());
server.use(cors());
server.use("/team", teamController)
server.use("/meeting", meetingController)
server.use("*", ErrorHandler);

server.listen(currentPort, () => {console.log(`listening on http://localhost:${currentPort}`)} )
dal_mysql.execute(initteamsTable);
