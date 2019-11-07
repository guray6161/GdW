const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Aufgabe 1
const message = 'Sükriye, Gürsel & Güray';
console.log(message);

//Aufgabe 2
const Sterne = 5;
var aktBewertung = 0;
var bewertung = 0;

//Eine Konstante wird deklariert.

console.log('Deine Bewertung');
console.log('Maximale Bewertung', Sterne);
console.log('Anzahl der Bewertungen', aktBewertung);
console.log('Sterne', Sterne);
bewertung = bewertung + 1;
//console.log("Wie viele Bewertungen haben wir: "Bewertung);
const bewerten = function(x) {
  if (x <= Sterne) {
    aktBewertung++;
    bewertung = x;
    console.log('Aktuelle Bewertung', bewertung);
  } else console - log('Gib eine Zahl');
};

//Aufgabe 3
rl.question('Bitte gib deine Bewertung: ', function(benutzerEingabe) {
  if (benutzerEingabe.trim() <= Sterne) {
    aktBewertung++;
    bewertung = benutzerEingabe;
    console.log('Aktuelle Bewertung wurde auf', bewertung, 'geändert');
    helloWorld();
    // ohne den kommentar gibt es eine fehlermeldung
 //   worldHello();
    rl.close();
  } else {
    rl.setPrompt('Eingabe darf nicht größer als 5 sein: ');
    rl.prompt();
    rl.on('line', (benutzerEingabe) => {
      if (benutzerEingabe.trim() <= Sterne) {
        aktBewertung++;
        bewertung = benutzerEingabe;
        console.log(`Aktuelle Bewertung wurde auf ${bewertung} geändert.`);
        helloWorld();
        // ohne den kommentar gibt es eine fehlermeldung
     //   worldHello();
        rl.close();
      } else {
        rl.setPrompt('Eingabe darf nicht größer als 5 sein:');
        rl.prompt();
      }
    });
  }
});

//Aufgabe 4
preufen = () => Sterne <= bewertung;

// Aufgabe 5
const hello = 'hello';

function helloWorld() {
  // das ist der grund der fehlermeldungm weil world nur lokal in der methode helloWorld sichtbar ist
  // ist es in der unteren methode `worldHello` nicht bekannt, was wäre eine lösung ?
  const world = 'World';
  console.log(hello + ' ' + world);
}

function worldHello() {
  console.log(world + ' ' + hello);
}

rl.on('close', () => {
  console.log('Program beendet');
});

//AUfgabenblatt 2

//                   0                1                   2
// bewrtungen [nameDerBewertung, anzahlDerBewerungen, aktuelleBewertung]
var bewertungenArr = ['nameDerBwertung', 0, 0];

var pruefen = (benutzerEingabe) => {
  if (benutzerEingabe <= Sterne) {
    bewertungenArr[1]++;
    bewertungenArr[2] = benutzerEingabe;
    console.log(
      `Abgegebene Bewertungen ${bewertungenArr[1]} , letzte Bewertung ${bewertungenArr[2]}`
    );
    rl.setPrompt('Weitere Bwertung abgeben bitte: ');
    rl.prompt();
  } else {
    rl.setPrompt('Gib eine Zahl kleiner gleich 5 ein: ');
    rl.prompt();
  }
};

rl.question('Bitte gib deine Bewertung: ', function(benutzerEingabe) {
  if (pruefen(benutzerEingabe)) {
    rl.setPrompt('Weitere Bwertung abgeben bitte: ');
    rl.prompt();
  } else {
    rl.setPrompt('Gib eine Zahl kleiner gleich 5 ein: ');
    rl.prompt();
  }
  rl.on('line', pruefen);
});

// Aufagbe 2
// Mit hilfe eines Onjektes könnten meherer Bwertungen mit unterschiedlichen Namen abgespeichert wereden
// bwertungen = {
//   name: {
//     nameBewertung: 'name',
//     anzahlAbstimmung: 0,
//     letzteErgebnis: 0
//   },
//   name2: {
//     nameBewertung: 'name2',
//     anzahlAbstimmung: 0,
//     letzteErgebnis: 0

// };
ratings = {
  nameBewertung: '',
  anzahlAbstimmung: 0,
  letzteErgebnis: 0
};
var pruefen = (benutzerEingabe) => {
  if (benutzerEingabe <= Sterne) {
    ratings['anzahlAbstimmung']++;
    ratings[letzteErgebnis] = benutzerEingabe;
    console.log(
      `Abgegebene Bewertungen ${ratings['anzahlAbstimmung']} , letzte Bewertung ${
        ratings['letzteErgebnis']
      }`
    );
    rl.setPrompt('Weitere Bwertung abgeben bitte: ');
    rl.prompt();
  } else {
    rl.setPrompt('Gib eine Zahl kleiner gleich 5 ein: ');
    rl.prompt();
  }
};

// Aufgabe 3
ratingsNeu = {
  nameBewertung: '',
  anzahlAbstimmung: 6,
  summeBertungen: 34,
  letzteErgebnis: 0,
  durchschnitt: function () {
    return this.summeBertungen / this.anzahlAbstimmung;
  }
};
