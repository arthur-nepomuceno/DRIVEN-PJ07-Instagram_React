import Post from "./Post";

export default function Posts() {

    const posts = [
        {topo: {img: "assets/img/meowed.svg", 
                nome: "meowed"},
        conteudo: {src: "assets/img/gato-telefone.svg"},
        fundo: {img: "assets/img/respondeai.svg", 
                curtidas: "Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>"}},
        
        {topo: {img: "assets/img/barked.svg", 
        nome: "barked"},
        conteudo: {src: "assets/img/dog.svg"},
        fundo: {img: "assets/img/adorable_animals.svg", 
                curtidas: "Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>"}}
    ];

    return (
        <div class="posts">
            <Post
            imgTopo="assets/img/barked.svg"
            nomeTopo="barked"
            srcConteudo="assets/img/dog.svg"
            imgCurtida="assets/img/adorable_animals.svg"
            txtCurtida="Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>"/>

            <div class="post">
                <div class="topo">
                    <div class="usuario">
                    <img src="assets/img/meowed.svg" />
                    meowed
                    </div>
                    <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/gato-telefone.svg" />
                </div>

                <div class="fundo">
                    <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    </div>

                    <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="topo">
                    <div class="usuario">
                    <img src="assets/img/barked.svg" />
                    barked
                    </div>
                    <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/dog.svg" />
                </div>

                <div class="fundo">
                    <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    </div>

                    <div class="curtidas">
                    <img src="assets/img/adorable_animals.svg" />
                    <div class="texto">
                        Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                    </div>
                    </div>
                </div>
            </div>
        </div>
);
}