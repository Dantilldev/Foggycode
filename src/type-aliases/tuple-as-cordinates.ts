type Coord = [number, number]; // TODO: [number, number]

function translate(c: Coord, dx: number, dy: number): Coord {
  // TODO: return a NEW tuple with translated coordinates
  return [c[0] + dx, c[1] + dy];
}

// 1. Definiera typen Coord som en tuple: [number, number].
// 2. Skriv funktionen translate som tar en Coord och två tal dx, dy.
// 3. Returnera en NY tuple där första värdet är c[0] + dx och andra är c[1] + dy.
// 4. Mutera inte den ursprungliga

// Uppgiften går ut på att:
// Skapa en typ för koordinater som alltid är en tuple med två nummer, t.ex. [x, y].
// Skriva en funktion som tar en sådan koordinat och två tal (dx, dy) och returnerar en ny tuple,
//  där båda värdena har flyttats (ökat/minskat) med dx och dy.
// Det är viktigt att inte ändra (mutera) den ursprungliga koordinaten, utan alltid skapa och returnera en ny tuple.
// Kort sagt: Du ska kunna flytta
