import Logo from "../Components/Logo";
import LogoMobile from "../Components/LogoMobile"
import InstagramMobile from "../Components/InstagramMobile"
import Pesquisa from "../Components/Pesquisa";
import Icones from "../Components/Icones";
import IconesMobile from "../Components/IconesMobile";

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