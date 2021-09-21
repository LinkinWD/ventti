
/* alkuteksti */


/* napit */
const uusiPeli = document.querySelector('#uusipeli')
const vedäKortti = document.querySelector('#vedäkortti')
const katso = document.querySelector('#katso')

/* alueet */
const peliAlue = document.querySelector('#pelialue')
const tietokoneKortit = document.querySelector('#tietokonekortit')
const pelaajaKortit = document.querySelector('#pelaajakortit')
const h5 = document.querySelectorAll('h5')
const voittoRuutu = document.querySelector('.voittoruutu')

/* pelaajat */
const pelaajanPisteet = document.querySelector('#pisteet')

const pelaaja = 
  {
    nimi: 'pelaaja',
    pisteet : 0,
    ässät : false,
    ässävähennyt: false
  }

const tietokone =
  {
    nimi: 'tietokone',
    pisteet : 0,
    ässät : false,
    ässävähennyt: false
  }

/* eventlistenerit */
uusiPeli.addEventListener('click', aloitaPeli)
vedäKortti.addEventListener('click', pelaajaVetääKortin)
katso.addEventListener('click', pelaajaKatsoo)

/* alkuasettelu ja button functiot */
katso.disabled = true
vedäKortti.disabled = true

function aloitaPeli() {
  document.body.style.backgroundColor = 'limegreen'
    pelaaja.pisteet = 0
    tietokone.pisteet = 0
    pelaaja.ässät = false
    tietokone.ässät = false
    tietokoneKortit.innerHTML = ''
    pelaajaKortit.innerHTML = ''
    vedäKortti.disabled = false
    katso.disabled = false
    voittoRuutu.classList.add('piilota')
    voittoRuutu.innerHTML = ''
    sekoita(korttipakka)
    jaaKortti(tietokone)
    jaaKortti(tietokone)
    jaaKortti(pelaaja)
    jaaKortti(pelaaja)
    uusiPeli.innerText = "Uusi peli?"
    uusiPeli.classList.add('piilota')
    if(tietokone.pisteet === 21) {
      voittoSeremonia('tietokone') 
    } else if(pelaaja.pisteet === 21) {
      voittoSeremonia('pelaaja')
    } else {
    piilotaKortti()}
    pelaajanPisteet.innerText = pelaaja.pisteet
    näytäTekstit()
    
   
    
}
function pelaajaVetääKortin() {
    pelaajanPisteet.innerText = ''
    jaaKortti(pelaaja)
    tarkistaMeniköYli(pelaaja)
    pelaajanPisteet.innerText = pelaaja.pisteet
}
function pelaajaKatsoo() {
    const peiteKortti = document.querySelector('.peitekortti')
    peiteKortti.classList.add('piilota')
    vedäKortti.disabled = true
    tietokonePelaa()
}


/* muut functiot */

/* Sekoita algorythm */
function sekoita(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/* pelifunctiot */
function jaaKortti(puoli) {
    let sijainti
    let img = document.createElement('img')
    img.src = `${korttipakka[0].img}`
    let {arvo} = korttipakka[0]
    if(arvo === 11 && puoli.ässät === true) {
      arvo = 1
    } else if(arvo === 11 && puoli.ässät === false) {
      puoli.ässät = true
      arvo = 11
    }
    
    puoli.pisteet += arvo
    if(puoli.pisteet > 21 && puoli.ässät === true && puoli.ässävähennyt === false) {
      puoli.pisteet -= 10
      puoli.ässävähennyt = true
    }
    if(puoli !== pelaaja){
      sijainti = tietokoneKortit
    } else {
      sijainti = pelaajaKortit
    }
    sijainti.append(img)
    korttipakka.shift()
}

function tietokonePelaa() {
  while(tietokone.pisteet < 17) {
    jaaKortti(tietokone)
  }
  tarkistaMeniköYli(tietokone)
  tarkistaVoittaja()
}


/* voitto ja voitontarkistu functiot */
function tarkistaMeniköYli(puoli) {
  if(puoli.pisteet > 21) {
    let voittaja = (puoli.nimi === 'tietokone') ? 'pelaaja' : 'tietokone'
    voittoSeremonia(voittaja)
    return false
  }
}

function tarkistaVoittaja() {
  let tPisteet = tietokone.pisteet
  let pPisteet = pelaaja.pisteet
  if(tPisteet === 21) {
    voittoSeremonia('tietokone')
  }
  else if(pPisteet === tPisteet) {
    voittoSeremonia('tietokone')
  }
  else if ( pPisteet > tPisteet) {
    voittoSeremonia('pelaaja')
  } else if(tPisteet > 21) { 
    voittoSeremonia('pelaaja')
  } else {
    voittoSeremonia('tietokone')
  }
}


function voittoSeremonia(voittaja) {
  katso.disabled = true
  vedäKortti.disabled = true
  let väri = (voittaja === 'tietokone') ? 'red' : 'blue'
  document.body.style.backgroundColor = väri
  voittoRuutu.classList.remove('piilota')
  voittoRuutu.innerHTML = `<h2> ${voittaja} voitti Pelin!!!!</h2>`
  uusiPeli.textContent = "Uusi peli?"
  uusiPeli.classList.remove('piilota')
  tietokoneKortit.firstChild.style.zIndex = '1'
}
/* apufunctiot */
function näytäTekstit() {
  h5.forEach( function(kohde) {
    kohde.classList.remove('piilota')
  })
}
function piilotaKortti() {
  tietokoneKortit.firstChild.style.zIndex = '-1'
  let img = document.createElement('img')
  img.classList.add('peitekortti')
  img.src = '../img/purple_back.png'
  tietokoneKortit.append(img)
  img.style.position = 'absolute'
} 
