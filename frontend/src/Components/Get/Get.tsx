import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MeetingModel } from "../../Models/MeetingModel";
import { TeamModel } from "../../Models/TeamModel";
import "./Get.css";


function Get(): JSX.Element {
    const [teams, setTeams] = useState<TeamModel[]>([]);
    // const[team, setTeam] = useState<TeamModel>();
    // const [meetings, setMeetings] = useState<MeetingModel[]>([]);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<TeamModel>();

    useEffect(()=>{
        axios.get("http://localhost:3001/team/all")
        .then(response => setTeams(response.data));
    },[])

    const send = async (team: TeamModel) => {
        try {
                await axios.get(`http://localhost:3001/meeting/${team.teamname}`)
                .then(res=>navigate(`/meetingList/${team.teamname}`));
        } catch (err: any) {
            console.log(err.message);
        }
    }

    return (
        <div className="Get">
			<div>
            <form onSubmit={handleSubmit(send)}>
                    <label>Team</label><br></br>
                    <select style={{ height: 30 }} {...register("teamname")}>
                        <option disabled>select option</option>
                        {teams.map(item => <option  key={item.id} value={item.id}>{item.teamname}</option>)}
                    </select><br></br>
                    <input type="submit" value="Show" style={{ height: 50, backgroundColor: "blue", borderRadius: 20 }} />
                </form>
            </div>
        </div>
    );
}

export default Get;
