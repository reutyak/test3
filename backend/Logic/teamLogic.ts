// All logical operations of the backend folder will displayed here.
// importations 
import dal_mysql from "../Utils/dal_mysql"
import { OkPacket } from "mysql";
import { TeamModel } from "../Models/TeamModel";


// functions( async / await ) for getting data from DB
const getAllTeam = async (): Promise<TeamModel[]> => {
    // command line for the DB
    const sql = "SELECT * FROM team";
    // a promise function that connects us to the database with the command line
    const result =  await dal_mysql.execute(sql);
    return result
     ;
}

// exporting 
export default {
    getAllTeam
}