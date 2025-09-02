interface Profile {
  // TODO
  readonly id: number;
  name: string;
  age?: number;
}

function formatProfile(p: Profile): string {
  // TODO
  if (p.age) {
    return `${p.name} (${p.age}) [id:${p.id}]`;
  }
  return `${p.name} (unknown) [id:${p.id}]`;
}

// Test kod
const p1: Profile = {id: 1, name: "Alice", age: 42};
const p2: Profile = {id: 2, name: "Daniel"};

console.log(formatProfile(p1)); // Förväntat: "Ada (42) [id:1]"
console.log(formatProfile(p2)); // Förväntat: "Bob (unknown) [id:2]"

// Your Task
// Create a profile interface and format a label.

// Define interface Profile with readonly id: number, name: string, age?: number.
// Write function formatProfile(p: Profile): string.
// If age exists, return "<name> (<age>) [id:<id>]".
// Otherwise return "<name> (unknown) [id:<id>]".
// Do not mutate the input.
