// Exhaustiv resultat-renderare

type Result2 =
  | {kind: "ok"; value: number}
  | {kind: "fail"; message: string}
  | {kind: "pending"};

function assertNever(x: never): never {
  throw new Error("unreachable: ");
}

function render(r: Result2): string {
  // TODO

  switch (r.kind) {
    case "ok":
      return "OK:" + r.value;
    case "fail":
      return "FAIL:" + r.message;
    case "pending":
      return "PENDING";

    default:
      return assertNever(r);
  }
}

// Testkod:
const okResult: Result2 = {kind: "ok", value: 42};
const failResult: Result2 = {kind: "fail", message: "fel"};
const pendingResult: Result2 = {kind: "pending"};

console.log(render(okResult)); // "OK: 42"
console.log(render(failResult)); // "FAIL: Något gick fel"
console.log(render(pendingResult)); //

// Uppgift: Rendera alla varianter av Result2 på ett tydligt sätt.
//
// En "discriminated union" är en typ där varje variant har ett gemensamt fält (här: 'kind') som visar vilken variant det är.
// Använd en switch-sats på 'kind' för att hantera varje variant separat.
//
// 1. Skriv funktionen render(r: Result2): string.
// 2. Använd switch(r.kind) för att avgöra vilken variant du har.
// 3. Returnera en sträng för varje variant:
//    - Om kind är 'ok', returnera 'OK:' följt av värdet.
//    - Om kind är 'fail', returnera 'FAIL:' följt av felmeddelandet.
//    - Om kind är 'pending', returnera 'PENDING'.
//
// Om du lägger till en ny variant i Result2 i framtiden, kommer TypeScript att varna dig om du glömmer att hantera den – tack vare assertNever-funktionen.

// En diskriminerad union använder ett gemensamt fält med ett literalt värde för att märka varje variant. En switch på det fältet smalnar av till rätt form i varje gren. Använd en assertNever-hjälpfunktion för att tvinga fram kompilatorfel om någon gren saknas.

// function assertNever(x: never): never {
//   throw new Error("unreachable");
// }
// Rendera varje fall till en kort etikett och håll grenarna enkla.
