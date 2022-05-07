import Logo from "../components/Logo";
import LogoMobile from "../components/LogoMobile"
import InstagramMobile from "../components/InstagramMobile"
import Pesquisa from "../components/Pesquisa";
import Icones from "../components/Icones";
import IconesMobile from "../components/IconesMobile";

export default function NavBar(){
    return (
        <div class="navbar">
          <div class="container">
            <Logo />
            <LogoMobile />
            <InstagramMobile />
            <Pesquisa />
            <Icones />
            <IconesMobile />            
          </div>
        </div>
    );
}