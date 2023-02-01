import "./MeetingList.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MeetingModel } from "../../Models/MeetingModel";


function MeetingList(): JSX.Element {
    const [meeting, setMeeting] = useState<MeetingModel[]>([]);
    const navigate = useNavigate();
    const params = useParams();
    const id = +(params.id || 0);

    useEffect(()=>{
        axios.get(`http://localhost:3001/meeting/${params.team}`)
        .then(response=>setMeeting(response.data));
    },[])
    return (
        <div className="MeetingList">
			<table className="paleBlueRows">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>team</th>
                        <th>start</th>
                        <th>end</th>
                        <th>duration</th>
                        <th>description</th>
                        <th>room</th>
                    </tr>
                </thead>
                <tbody>
                    {meeting.map(item =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.team}</td>
                            <td>{new Date(item.start).toLocaleString()}</td>
                            <td>{new Date(item.end).toLocaleString()}</td>
                            <td>{((new Date(item.end)).getTime() - (new Date(item.start)).getTime())/1000/60} minutes</td>
                            <td>{item.description}</td>
                            <td>{item.room}</td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
}

export default MeetingList;
