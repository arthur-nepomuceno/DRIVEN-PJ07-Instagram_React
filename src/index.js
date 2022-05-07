import reactDom from "react-dom";
import NavBar from "./containers/NavBar";
import Corpo from "./containers/Corpo";
import FundoMobile from "./containers/FundoMobile";

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