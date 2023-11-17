Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

Il gioco

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta:
passiamo il numero di caselle generate

in un funzione generiamo 16 numeri che andiamo a mettere in un array, questi numeri saranno compresi tra il nuero di caselle generate e non potranno ripetersi

le bombe. :bomba:
:esclamazione:Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

Quindi nella generazione ed inserimento di questi 16 numeri andremo a controllare nell'array prima se sono contenuti (includes()) nell''array dei numeri random e se non sono presenti li andiamo ad aggiungere con push.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati

- abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.

quindi possiamo confrontare il cotenuto della cella grazie grazie all-indice del ciclo e se l'indice è incluso nell'array dei numeri random,

la casella cambierà colore e diventerà rossa quindi aggiungere un classe alla cella e la partita termina

(un idea per non far cliccare altri pulsanti potrebbe essere di mettere un div trasparente grande quanto la grid in position absolute)

- Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
  in questo caso no rendiamo questa opzione quella di default.

La partita termina quando il giocatore clicca su una bomba

"quindi quando ha cliccato sulla bomba faremo in modo che non possa più interagire con le caselle"

o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

per questo caso ci possiamo creare una variabile che ad ogni click delle celle valite aumenti e nel momento in cui questa variabile raggiunge il numero di celle disponibili meno quelle random il gioco finirà e diremo che io giocatore ha vinto

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

per questo possiamo usare lo stesso cotatore utilizzato che verifica quante celle abbiamo cliccato fin ora
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
  Superbonus 1
  Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
  Superbonus 2
  Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.
