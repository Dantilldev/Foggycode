interface Circle {
  kind: "circle";
  radius: number;
} // TODO: kind: 'circle'; radius: number
interface Square {
  kind: "square";
  size: number;
} // TODO: kind: 'square'; size: number
interface Rect {
  kind: "rect";
  width: number;
  height: number;
} // TODO: kind: 'rect'; width: number; height: number

type Shape = Circle | Square | Rect; // TODO: Circle | Square | Rect

function area(shape: Shape): number {
  // TODO: switch on shape.kind and compute
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "square":
      return shape.size * shape.size;
    case "rect":
      return shape.width * shape.height;
  }
}

// Uppgift:
// Steg 1: Skapa tre gränssnitt (interfaces) för olika former:
//         - Circle med 'kind: "circle"' och 'radius: number'
//         - Square med 'kind: "square"' och 'size: number'
//         - Rect med 'kind: "rect"' och 'width' + 'height'
//
// Steg 2: Skapa en unionstyp Shape = Circle | Square | Rect
//
// Steg 3: Skriv funktionen area(shape: Shape): number
//
// Steg 4: Använd shape.kind för att avgöra vilken form det är
//         - Om "circle", beräkna area med Math.PI * radius * radius
//         - Om "square", beräkna area med size * size
//         - Om "rect", beräkna area med width * height
//
// Steg 5: Returnera det beräknade värdet
//         - Håll varje gren liten och tydlig så att TypeScript kan förstå exakt vilken form du hanterar
