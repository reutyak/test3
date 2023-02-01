import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<aside><Menu/></aside>
            <main><Routing/></main>
        </div>
    );
}

export default Main;
