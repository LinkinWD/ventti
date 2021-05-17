const korttipakka = [
    {
        nimi: "hertta2",
        arvo: 2,
        img: "img/2H.png"
    },
    {
        nimi: "ruutu2",
        arvo: 2,
        img: "img/2D.png"
    },
    {
        nimi: "risti2",
        arvo: 2,
        img: "img/2C.png"
    },
    {
        nimi: "pata2",
        arvo: 2,
        img: "img/2S.png"
    },
    {
        nimi: "hertta3",
        arvo: 3,
        img: "img/3H.png"
    },
    {
        nimi: "ruutu3",
        arvo: 3,
        img: "img/3D.png"
    },
    {
        nimi: "risti3",
        arvo: 3,
        img: "img/3C.png"
    },
    {
        nimi: "pata3",
        arvo: 3,
        img: "img/3S.png"
    },
    {
        nimi: "hertta4",
        arvo: 4,
        img: "img/4H.png"
    },
    {
        nimi: "ruutu4",
        arvo: 4,
        img: "img/4D.png"
    },
    {
        nimi: "risti4",
        arvo: 4,
        img: "img/4C.png"
    },
    {
        nimi: "pata4",
        arvo: 4,
        img: "img/4S.png"
    },
    {
        nimi: "hertta5",
        arvo: 5,
        img: "img/5H.png"
    },
    {
        nimi: "ruutu5",
        arvo: 5,
        img: "img/5D.png"
    },
    {
        nimi: "risti5",
        arvo: 5,
        img: "img/5C.png"
    },
    {
        nimi: "pata5",
        arvo: 5,
        img: "img/5S.png"
    },
    {
        nimi: "hertta6",
        arvo: 6,
        img: "img/6H.png"
    },
    {
        nimi: "ruutu6",
        arvo: 6,
        img: "img/6D.png"
    },
    {
        nimi: "risti6",
        arvo: 6,
        img: "img/6C.png"
    },
    {
        nimi: "pata6",
        arvo: 6,
        img: "img/6S.png"
    },
    {
        nimi: "hertta7",
        arvo: 7,
        img: "img/7H.png"
    },
    {
        nimi: "ruutu7",
        arvo: 7,
        img: "img/7D.png"
    },
    {
        nimi: "risti7",
        arvo: 7,
        img: "img/7C.png"
    },
    {
        nimi: "pata7",
        arvo: 7,
        img: "img/7S.png"
    },
    {
        nimi: "hertta8",
        arvo: 8,
        img: "img/8H.png"
    },
    {
        nimi: "ruutu8",
        arvo: 8,
        img: "img/8D.png"
    },
    {
        nimi: "risti8",
        arvo: 8,
        img: "img/8C.png"
    },
    {
        nimi: "pata8",
        arvo: 8,
        img: "img/8S.png"
    },
    {
        nimi: "hertta9",
        arvo: 9,
        img: "img/9H.png"
    },
    {
        nimi: "ruutu9",
        arvo: 9,
        img: "img/9D.png"
    },
    {
        nimi: "risti9",
        arvo: 9,
        img: "img/9C.png"
    },
    {
        nimi: "pata9",
        arvo: 9,
        img: "img/9S.png"
    },
    {
        nimi: "hertta10",
        arvo: 10,
        img: "img/10H.png"
    },
    {
        nimi: "ruutu10",
        arvo: 10,
        img: "img/10D.png"
    },
    {
        nimi: "risti10",
        arvo: 10,
        img: "img/10C.png"
    },
    {
        nimi: "pata10",
        arvo: 10,
        img: "img/10S.png"
    },
    {
        nimi: "herttajätkä",
        arvo: 10,
        img: "img/JH.png"
    },
    {
        nimi: "ruutujätkä",
        arvo: 10,
        img: "img/JD.png"
    },
    {
        nimi: "ristijätkä",
        arvo: 10,
        img: "img/JC.png"
    },
    {
        nimi: "patajätkä",
        arvo: 10,
        img: "img/JS.png"
    },
    {
        nimi: "herttarouva",
        arvo: 10,
        img: "img/QH.png"
    },
    {
        nimi: "ruuturouva",
        arvo: 10,
        img: "img/QD.png"
    },
    {
        nimi: "ristirouva",
        arvo: 10,
        img: "img/QC.png"
    },
    {
        nimi: "patarouva",
        arvo: 10,
        img: "img/QS.png"
    },
    {
        nimi: "herttakuningas",
        arvo: 10,
        img: "img/KH.png"
    },
    {
        nimi: "ruutukuningas",
        arvo: 10,
        img: "img/KD.png"
    },
    {
        nimi: "ristikuningas",
        arvo: 10,
        img: "img/KC.png"
    },
    {
        nimi: "patakuningas",
        arvo: 10,
        img: "img/KS.png"
    },
    {
        nimi: "herttaässä",
        arvo: 1,
        img: "img/AH.png"
    },
    {
        nimi: "ruutuässä",
        arvo: 1,
        img: "img/AD.png"
    },
    {
        nimi: "ristiässä",
        arvo: 1,
        img: "img/AC.png"
    },
    {
        nimi: "pataässä",
        arvo: 1,
        img: "img/AS.png"
    },
]




function kortti() {
    for( let kortti of korttipakka) {
    let div = document.createElement('div')
    div.innerHTML = `<img src=${kortti.img}>`
    document.body.append(div)
    }
}
