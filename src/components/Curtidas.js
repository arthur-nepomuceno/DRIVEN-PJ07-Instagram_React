export default function Curtidas(props){
    return (
        <div class="curtidas">
            <img src={props.src} />
            <div class="texto">
                {props.texto}
            </div>
        </div>
    );
}

