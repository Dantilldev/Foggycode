// Total Prices from Unknown - Summera priser från okänt värde

function totalPrices(input: unknown): number {
  // Om input inte är en array, returnera 0 direkt
  if (!Array.isArray(input)) return 0;

  let total = 0;
  for (const item of input) {
    // Kolla att item är ett objekt, inte null, har property "price" och att price är en siffra
    if (
      typeof item === "object" &&
      item !== null &&
      "price" in item &&
      typeof (item as any).price === "number"
    ) {
      total += (item as any).price;
    }
  }
  return total;
}

// Testkod:
console.log(totalPrices([{price: 10}, {price: 20}])); // 30
console.log(totalPrices([{price: 10}, {price: "hej"}])); // 10
console.log(totalPrices(123)); // 0
console.log(totalPrices([])); // 0

// ALT.

// function totalPrices(xs: unknown) {
//   if (!Array.isArray(xs)) return 0;
//   let t = 0;
//   for (const it of xs) {
//     if (typeof it === "object" && it && "price" in it) {
//         const obj = it as { price?: unknown }
//       const p = obj.price;
//       if (typeof p === "number") t += p;
//     }
//   }
//   return t;
// }

// const xs = [{title:"bread", price: 50},{title:"milk"}]

// console.log(totalPrices(xs))

// Du får in något okänt (unknown).
// Om det är en array med objekt som har ett numeriskt pris (price), ska du räkna ut summan av alla priser.
// Annars ska du returnera 0.
//
// Så här kan du göra:
// 1. Kolla om input är en array: Array.isArray(input)
// 2. Gå igenom varje sak i arrayen.
// 3. Kolla om det är ett objekt, inte null, har en egenskap "price" och att price är en siffra.
// 4. Lägg ihop alla priser som är siffror.
// 5. Returnera 0 om input inte är en array eller om inget pris hittas.
// 6. Ändra inte på input.
//
// Exempelfunktion:
// function total(xs: unknown) {
//   if (!Array.isArray(xs)) return 0;
//   let t = 0;
//   for (const it of xs) {
//     if (typeof it === "object" && it && "price" in it) {
//       const p = (it as { price?: unknown }).price;
//       if (typeof p === "number") t += p;
//     }
//   }
//   return t;
// }
//
// Din uppgift:
// Skriv funktionen totalPrices(input: unknown): number.
// Om input är en array av { price: number }, returnera summan av price.
// Hoppa över objekt utan numeriskt pris.
// Returnera 0 om input inte är en array eller är tom.
// Ändra inte på input.
