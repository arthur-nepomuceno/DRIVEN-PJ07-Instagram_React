import Acoes from "./Acoes";

export default function Post(props) {
    
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                <img src={props.imgTopo} />
                {props.nomeTopo}
                </div>
                <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.srcConteudo} />
            </div>

            <div class="fundo">
                <Acoes />

                <div class="curtidas">
                <img src={props.imgCurtida} />
                <div class="texto">
                    {props.txtCurtida}
                </div>
                </div>
            </div>
        </div>
    );
}