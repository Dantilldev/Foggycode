type PersonAlias = {first: string; last: string};

interface Person {
  // TODO
  first: string;
  last: string;
}

function nameLength(p: Person): number {
  // TODO

  const {first, last} = p;
  return first.length + last.length + 1;
}

const obj1: PersonAlias = {first: "Sven", last: "Svensson"};

const obj2: Person = {first: "Kalle", last: "Kron"};

console.log(obj1);
console.log(obj2);

// Type script går på struktur, därav både types och interface funkar.

// Compute the length of a full name.

// Create type PersonAlias = { first: string; last: string }.
// Create interface Person { first: string; last: string }.
// Implement nameLength(p: Person): number that returns first.length + last.length + 1 (for the space).
// In tests, pass an object of the alias shape to nameLength.
