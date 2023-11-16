'use strict';

// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colore di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

function createElement(tag, classname, content) {
  const element = document.createElement(tag);
  element.classList.add(classname);
  element.append(content);

  return element;
}

// function changeColor(linkClassname, classname) {
//   const element = document.querySelector(linkClassname);
//   element.classList.add(classname);
//   console.log('colore cambiato');
// }

const playButton = document.getElementById('play-button');
const main = document.querySelector('main');
const titolo = document.querySelector('main h2');

console.log(playButton);

// 1 sul bottone play dove l'utente clicchera ci agganciamo un event listener che nel momento in cui  viene attivato va ad inserire nel main tutte le caselle.
// Dobbiamo tener conto che ogni volta che creaiamo le caselle quelle nuove saranno sovrascitte a quelle vecchie.

playButton.addEventListener('click', function () {
  titolo.remove();
  main.innerHTML = '';

  const grid = document.createElement('div');

  grid.classList.add('grid');

  // 2 Con l'inserimento delle caselle nel main tramite un ciclo for la variabile che usciamo per il ciclo può essere utilizata come indice della casella.

  for (let i = 0; i < 100; i++) {
    const myElement = createElement('div', 'cella', i);
    myElement.addEventListener('click', function () {
      console.log(i);
      myElement.classList.add('colore-cella');
    });

    grid.append(myElement);
  }
  main.append(grid);
});

// 4sempre nel ciclo for che utiliziamo per la creazione delle celle ad ogni cella creata ci agganciamo un event listener che al click sulla casella aggiungera una classe che gli cambierà colore un console.log che gli farà stampare l'indice in console.
