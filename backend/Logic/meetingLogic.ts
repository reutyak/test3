import dal_mysql from "../Utils/dal_mysql";
import { OkPacket } from "mysql";
import { MeetingModel } from "../Models/meetingModel";


const getByTeam = async (team: number): Promise<MeetingModel[]> => {
    const sql = `SELECT exam3.meeting.*, exam3.team.teamname as team FROM exam3.meeting JOIN exam3.team ON exam3.meeting.team = exam3.team.id WHERE exam3.meeting.team=${team}`;
    const response = await dal_mysql.execute(sql);
    return response;
}

const getByRange = async (meeting: MeetingModel):Promise<Boolean> => {
    const sql = `SELECT * FROM exam3.meeting WHERE ((exam3.meeting.team = ${meeting.team}) and (('${meeting.end}' > start and start > '${meeting.start}') or (start < '${meeting.start}' and end > '${meeting.start}')))`;
    const response = await dal_mysql.execute(sql);
    return response;
}

const addMeeting = async (meeting: MeetingModel): Promise<MeetingModel> => {
    const sql = `
    INSERT INTO meeting (team, start, end, description, room) VALUES (${meeting.team}, '${meeting.start}', '${meeting.end}', '${meeting.description}', '${meeting.room}');
    `;
    const response : OkPacket = await dal_mysql.execute(sql);
    meeting.id = response.insertId;
    return meeting;

}


// exporting 
export default {
    addMeeting,
    getByTeam,
    getByRange
    
}




