interface Point2 {
  // TODO
  x: number;
  y: number;
}

function pointFromJson(json: string): Point {
  // TODO
  return JSON.parse(json) as Point2;
}

function manhattan(p: Point): number {
  // TODO
  return Math.abs(p.x) + Math.abs(p.y);
}

// Test

const p = pointFromJson('{"x":1,"y":1}');

console.log(p); // Förväntat: { x: 3, y: -4 }
console.log(manhattan(p)); // Förväntat: 2
// Point from JSON
// JSON.parse returns any. The compiler cannot know what shape you expect. You can assert the parsed value to the interface you need.

// Create a small Point shape and read it from JSON. Then compute a simple metric from the point.

// interface P {
//   x: number;
//   y: number;
// }
// const p = JSON.parse('{"x":1,"y":2}') as P;
// Your Task
// Parse a point from JSON and compute its Manhattan distance.

// Define interface Point { x: number; y: number }.
// Implement pointFromJson(json: string): Point using an assertion on JSON.parse.
// Implement manhattan(p: Point): number that returns Math.abs(p.x) + Math.abs(p.y).
// Keep both functions pure (no mutation).
