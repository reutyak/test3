import { Route, Routes } from "react-router-dom";
import Add from "../Add/Add";
import Get from "../Get/Get";
import MeetingList from "../MeetingList/MeetingList";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path = "/" element={<Get/>}/>
                <Route path = "/addMeeting" element={<Add/>}/>
                <Route path = "/meetingList/:team" element={<MeetingList/>}/>
                <Route path = "*" element={<Get/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
