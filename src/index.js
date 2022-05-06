import reactDom from "react-dom";
import NavBar from "./Containers/NavBar";
import Corpo from "./Containers/Corpo";
import FundoMobile from "./Containers/FundoMobile";

const body = document.querySelector("body");

function App() {
    return (
        <div class="root">
            <NavBar />
            <Corpo />
            <FundoMobile />
        </div>
    );
}

reactDom.render(App(), body);