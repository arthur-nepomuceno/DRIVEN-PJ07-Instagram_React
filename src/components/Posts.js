import Post from "./Post";

export default function Posts() {

    const posts = [
        {topo: {img: "assets/img/meowed.svg", 
                nome: "meowed"},
        conteudo: {src: "assets/img/gato-telefone.svg"},
        fundo: {img: "assets/img/respondeai.svg", 
                nome: "respondeai",
                num: "101.523"}},
        
        {topo: {img: "assets/img/barked.svg", 
                nome: "barked"},
        conteudo: {src: "assets/img/dog.svg"},
        fundo: {img: "assets/img/adorable_animals.svg", 
                nome: "adorable_animals",
                num: "99.159"}}
    ];

    return (
        <div class="posts">
            {posts.map(post => <Post imgTopo={post.topo.img}
                                nomeTopo={post.topo.nome}
                                srcConteudo={post.conteudo.src}
                                imgCurtida={post.fundo.img}
                                nomeCurtida={post.fundo.nome}
                                numCurtida={post.fundo.num}/>)}
        </div>
);
}