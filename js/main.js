'use strict';

// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colore di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// e aggiungiamo la logica del gioco
// Il gioco

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta:
// passiamo il numero di caselle generate
// le bombe. :bomba:
// :esclamazione:Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

function createElement(tag, classname, content) {
  const element = document.createElement(tag);
  element.classList.add(classname);
  element.append(content);

  return element;
}

// in un funzione generiamo 16 numeri che andiamo a mettere in un array, questi numeri saranno compresi tra il numero di caselle generate e non potranno ripetersi

function numRandomBombs(num, numlimit) {
  //geriamo 16 numeri
  const numbers = [];

  do {
    let number = Math.floor(Math.random() * num + 1);

    // Quindi nella generazione ed inserimento di questi 16 numeri andremo a controllare nell'array prima se sono contenuti (includes()) nell''array dei numeri random e se non sono presenti li andiamo ad aggiungere con push.

    if (numbers.includes(number) === false) {
      numbers.push(number);
    }
  } while (numbers.length !== numlimit);

  return numbers;
}

//funzxione per cambiare il colore alla cella
function changeColor(linkClassname, classname) {
  linkClassname.classList.add(classname);
}

//resetto la griglia
function resetGrid() {
  titolo.classList.add('d-none');
  grid.innerHTML = '';
}

function createGrid() {
  resetGrid();
  grid.classList.remove('d-none');
  grid.classList.add('row');

  // 2 Con l'inserimento delle caselle nel main tramite un ciclo for la variabile che usciamo per il ciclo può essere utilizata come indice della casella.

  //alleggeriamo il codice usando fragment prima di append

  const fragment = document.createDocumentFragment();
  // const fragmentError = document.createDocumentFragment();

  //array con quale numero ha le bombe
  const errorNumber = numRandomBombs(100, 16);
  console.log('array con le bombe', errorNumber);
  let punteggio = [];

  for (let i = 1; i <= 100; i++) {
    const myElement = createElement('div', 'cella', i);

    //cambio colore della cella al click
    myElement.addEventListener('click', function () {
      // confrontiamo il cotenuto della cella grazie grazie all-indice del ciclo e se l'indice è incluso nell'array dei numeri random
      if (errorNumber.includes(i) === true) {
        changeColor(myElement, 'colore-cella-rosso');

        const sconfitta = createElement(
          'div',
          'vit-e-sconfit',
          `You lost 
                          with ${punteggio.length} points`
        );

        grid.append(sconfitta);
      } else {
        changeColor(myElement, 'colore-cella-blu');

        //inserisco quale caseela blu e' stata premuta
        if (!punteggio.includes(i)) {
          punteggio.push(i);
        }
        //mostriamo il punteggio nell'html
        elementPunteggio.innerHTML = `POINTS ${punteggio.length}`;

        //se arriva al numero di caselle massime blu vince
        if (punteggio.length === 100 - 16) {
          const vittoria = createElement(
            'div',
            'vit-e-sconfit',
            `You won 
            with ${punteggio.length} points`
          );

          grid.append(vittoria);
        }
      }
    });

    fragment.append(myElement);
  }

  grid.append(fragment);
  main.append(grid);
}

const grid = document.querySelector('.grid');
const playButton = document.getElementById('play-button');
const main = document.querySelector('main');
const titolo = document.querySelector('main h2');
const elementPunteggio = document.getElementById('punteggio');

// Sul bottone play dove l'utente clicchera ci agganciamo un event listener che nel momento in cui  viene attivato va ad inserire nel main tutte le caselle.
// Dobbiamo tener conto che ogni volta che creaiamo le caselle quelle nuove saranno sovrascitte a quelle vecchie.

playButton.addEventListener('click', createGrid);

// 4sempre nel ciclo for che utiliziamo per la creazione delle celle ad ogni cella creata ci agganciamo un event listener che al click sulla casella aggiungera una classe che gli cambierà colore un console.log che gli farà stampare l'indice in console.
