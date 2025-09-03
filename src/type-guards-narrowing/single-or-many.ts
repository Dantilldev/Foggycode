function asList(v: string | string[]): string[] {
  // TODO

  if (typeof v === "string") {
    return [v];
  }

  return Array.isArray(v) ? [...v] : [v];
}

// En eller flera

// Ibland ska en funktion acceptera antingen ett enskilt objekt eller en array av objekt. Använd Array.isArray för att avgöra vilken typ du har och normalisera till en konsekvent form.

// function ensureArray(s: string | string[]) {
//   return Array.isArray(s) ? s : [s];
// }
// Returnera alltid en ny array så att anropare säkert kan återanvända resultatet.

// Din uppgift
// Normalisera input till en array av strängar.

// Skriv funktionen asList(v: string | string[]): string[].
// Om v är en sträng, returnera [v].
// Om v är en array, returnera en ny array med samma element (returnera inte referensen till input).
// Mutera inte input.
