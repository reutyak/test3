import { Alert } from "@mui/material";
import { getValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { start } from "repl";
import { MeetingModel } from "../../Models/MeetingModel";
import { TeamModel } from "../../Models/TeamModel";
import "./Add.css";

function Add(): JSX.Element {
    const [teams, setTeams] = useState<TeamModel[]>([]);
    // const [meetRange, setMeetRange] = useState<MeetingModel[]>([]);
    const [inputText, setInputText] = useState("");
    const {register, handleSubmit} = useForm<MeetingModel>();
    const navigate = useNavigate();
    const params = useParams();
    const handleChange = (text:any) => {setInputText(text.target.value);};
    const [alert, setAlert] = useState<Boolean>(false);
    const alertOn = ()=>{
        if (alert == true){
            return <Alert severity="warning">You have another meeting during this hours</Alert>
        }
    };

    useEffect(()=>{
        axios.get("http://localhost:3001/team/all")
        .then(response => setTeams(response.data));
    },[]);

    const send =  async (newMeeting: MeetingModel) => {
        try {
                await axios.post(`http://localhost:3001/meeting/range`,newMeeting)
                .then(
                    async response => 
                    (response.data.length == 0?(await axios.post("http://localhost:3001/meeting/",newMeeting).then(res=>navigate("/"))
                    ):setAlert(true))
                    );
        } catch (err: any) {
            console.log(err.message);
        }
    }

    return (
        <div className="Add">
			<div className="Box">
                <form onSubmit={handleSubmit(send)}>
                    <div>{alertOn()}</div>
                    <h2>Add Meeting</h2>
                    <label>Team</label>
                    <select required style={{ height: 30 }} {...register("team")}>
                        <option disabled>select option</option>
                        {teams.map(item => <option key={item.id} value={item.id}>{item.teamname}</option>)}
                    </select>
                    <label>Start Date:</label>
                    <input required type="datetime-local" id="start" defaultValue={inputText} onClick={handleChange}  {...register("start")}/>

                    <label>End Date:</label>
                    <input required type="datetime-local" min={inputText} {...register("end")}/>

                    <label>Description:</label>
                    <input required type="text" {...register("description")}/>

                    <label>Room:</label>
                    <input required type="text" {...register("room")}/>

                    
                    <input required type="submit" value="Add Meeting" style={{ height: 50, backgroundColor: "blue", borderRadius: 20 }} />
                </form>
            </div>
        </div>
    );
}

export default Add;
