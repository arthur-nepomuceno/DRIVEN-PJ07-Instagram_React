import Copyright from "./Copyright";
import Links from "./Links";
import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

export default function Sidebar() {

    const usuario = {src: "assets/img/catanacomics.svg",
                    login: "catanacomics",
                    nome: "Catana"};

    return (
        <div class="sidebar">
            <Usuario src={usuario.src} login={usuario.login} nome={usuario.nome}/>
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    );
}