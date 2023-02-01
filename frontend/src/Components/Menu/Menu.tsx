import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<Header/><br></br>
            <div><NavLink to="/"><h2>Meeting List By Team</h2></NavLink></div>
            <div><NavLink to="/addMeeting"><h2>Add Meeting</h2></NavLink></div> 
        </div>
    );
}

export default Menu;
