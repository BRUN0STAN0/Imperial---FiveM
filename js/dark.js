var newLineCharacter = "|";

function printOut(text, div, timePerLetter) {
  var index = 0;

  var printNextLetter = function () {
    if (index < text.length) {
      var CHAR = text[index];

      switch (CHAR) {
        case newLineCharacter:
          $("#" + div).append("<br>");
          break;
        default:
          $("#" + div).append(CHAR);
          break;
      }

      index++;

      setTimeout(printNextLetter, timePerLetter);
    }
  };

  printNextLetter();
}

var passwordInput = document.getElementById("password");
var password = "01010101";
var contenutoDiv = document.getElementById("contenuto");

passwordInput.addEventListener("keyup", function (event) {
  if (passwordInput.value == password) {
    contenutoDiv.style.display = "block";
    passwordInput.style.display = "none";
    printOut(
      ` || Accesso a database: Imperial ha la capacità di accedere a database interni o riservati della città, permettendogli di ottenere informazioni dettagliate su edifici, persone, attività economiche, e così via. ||`,
      "test1",
      50
    );

    printOut(
      ` ||
    Monitoraggio delle telecamere di sorveglianza: abbiamo accesso a telecamere di sicurezza della città, consentendogli di monitorare l'attività in diversi luoghi o seguire le tracce di determinate persone. ||
    `,
      "test2",
      120
    );

    printOut(
      ` ||
    Risorse informatiche avanzate: Come esperto informatico, abbiamo la capacità di hackerare sistemi informatici o ottenere informazioni riservate, ad esempio dati finanziari, comunicazioni private o documenti segreti. ||
    `,
      "test3",
      20
    );

    printOut(
      ` ||
    Tracciamento delle comunicazioni: Imperial potrebbe essere in grado di tracciare le comunicazioni in città, permettendogli di scoprire piani segreti o alleanze tra gruppi di giocatori. ||
    `,
      "test4",
      200
    );

    printOut(
      `||
    Analisi dei dati demografici: Imperial Potrebbe riuscire a raccogliere e analizzare dati demografici della città, come la distribuzione della popolazione per età, genere o occupazione, il che potrebbe essere utile per sviluppare strategie o prendere decisioni in-game. ||`,
      "test5",
      300
    );

    printOut(
      `||
    Ricerca su eventi storici: Con le nostre competenze informatiche, potremmo effettuare ricerche su eventi storici o dati archiviati per scoprire dettagli nascosti sulla storia della città.`,
      "test6",
      50
    );
  }
});
