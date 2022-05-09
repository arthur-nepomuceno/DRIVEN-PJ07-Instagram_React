import React from "react";

export default function Post(props) {

    const [iconName, setIconName] = React.useState("heart-outline")
    const [iconId, setIconId] = React.useState("");

    function ButtonLike() {
        if(iconName === "heart-outline"){
            setIconName("heart");
            setIconId("red");
        } else if (iconName === "heart"){
            setIconName("heart-outline");
            setIconId("");
        }
    }

    function ContentLike() {
        if(iconName === "heart-outline"){
            setIconName("heart");
            setIconId("red");
        }
    }
    
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
                <img src={props.srcConteudo} onClick={ContentLike}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={iconName} id={iconId} onClick={ButtonLike}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                <img src={props.imgCurtida} />
                <div class="texto">
                    Curtido por <strong>{props.nomeCurtida}</strong> e <strong>outras {props.numCurtida} pessoas</strong>
                </div>
                </div>
            </div>
        </div>
    );
}