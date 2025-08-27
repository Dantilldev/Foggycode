type Status = "idle" | "loading" | "success" | "error"; // TODO

function describeStatus(status: Status): string {
  // TODO: use switch to return the specified strings per status

  switch (status) {
    case "idle":
      return "Idle";
    case "loading":
      return "Loading...";
    case "success":
      return "Success";
    case "error":
      return "Error";
  }
}

// Testkod
console.log("Idle Status:", describeStatus("idle")); // Idle
console.log("Loading Status:", describeStatus("loading")); // Loading...
console.log("Success Status:", describeStatus("success")); // Success
console.log("Error Status:", describeStatus("error")); // Error

// Övningen går ut på att:
// Skapa en typ med fyra möjliga status-värden.
// Skriva en funktion som tar status och returnerar en beskrivande text.
// Steg för steg:

// Definiera typen Status med fyra strängvärden.
// Skriv funktionen describeStatus som tar en Status.
// Använd switch för att kolla vilket värde status har.
// Returnera rätt text för varje fall.
// Testa funktionen med alla statusar.
// Kort: Du ska översätta statuskoder till tydliga texter.
