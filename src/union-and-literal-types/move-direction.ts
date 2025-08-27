type Direction = "up" | "down" | "left" | "right"; // TODO: 'up' | 'down' | 'left' | 'right'

type Point = {x: number; y: number};

function move(p: Point, dir: Direction): Point {
  // TODO: return a NEW point moved by 1 in dir
  switch (dir) {
    case "up":
      return {...p, y: p.y + 1};
    case "down":
      return {...p, y: p.y - 1};
    case "left":
      return {...p, x: p.x + -1};
    case "right":
      return {...p, x: p.x + 1};
  }
}

console.log(move({x: 0, y: 0}, "up")); // { x: 0, y: -1 }
console.log(move({x: 1, y: 3}, "right")); // { x: 6, y: 3 }
// Uppgift:
// Steg 1: Skapa typen Direction = 'up' | 'down' | 'left' | 'right'
//         - Den representerar möjliga rörelseriktningar
// Steg 2: Skapa typen Point = { x: number; y: number }
//         - Den representerar en punkt i ett koordinatsystem
// Steg 3: Skriv funktionen move(p: Point, dir: Direction): Point
//         - Den ska ta en punkt och en riktning
// Steg 4: Använd switch på dir för att avgöra rörelseriktning
//         - Om 'up', minska y med 1
//         - Om 'down', öka y med 1
//         - Om 'left', minska x med 1
//         - Om 'right', öka x med 1
//
// Steg 5: Returnera
