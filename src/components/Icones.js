export default function Icones() {
    const list = [
        "paper-plane-outline",
        "compass-outline",
        "heart-outline",
        "person-outline"
    ];

    return (
        <div class="icones">
            {list.map(element => <ion-icon name={element}></ion-icon>)}
        </div>
    );
}