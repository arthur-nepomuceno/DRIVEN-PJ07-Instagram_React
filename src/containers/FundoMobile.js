export default function FundoMobile() {

    const ionIcons = ["home","search-outline","add-circle-outline","heart-outline","person-outline"];

    return (
        <div class="fundo-mobile">
            {ionIcons.map(iconName => <ion-icon name={iconName}></ion-icon>)}
        </div>
    );
}