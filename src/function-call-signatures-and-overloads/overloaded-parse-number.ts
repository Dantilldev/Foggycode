// Överlagrad Parse Number

function parseNumber(arg: any): any {
  // TODO: overloads + single implementation
  if (Array.isArray(arg)) {
    return arg.map((s: any) => parseFloat(s));
  }
  return parseFloat(arg);
}

// Överlagringar tillåter en funktion att acceptera olika indataformat och returnera olika utdataformat. Du skriver flera signaturer och sedan en enda implementation som hanterar båda.

// Parsar en enskild sträng till ett nummer, eller en array av strängar till en array av nummer. Använd Number eller parseFloat och håll logiken enkel.

// function len(x: string): number;
// function len(xs: string[]): number[];
// function len(x: string | string[]) {
//   return Array.isArray(x) ? x.map((s) => s.length) : x.length;
// }
// Din Uppgift
// Skapa en överlagrad parseNumber som hanterar en sträng eller en array av strängar.

// Skriv två överlagrade signaturer:
// parseNumber(s: string): number
// parseNumber(arr: string[]): number[]
// Skriv en implementation som hanterar båda indata.
// Använd parseFloat och returnera NaN för icke-numeriska delar.
// Mutera inte indata-arrayen.
