type FullName = {first: string; last?: string};

function printFullName(p: FullName): string {
  // TODO: check if p.last is defined; include it with a space if present
  return p.last ? `${p.first} ${p.last}` : p.first;
}

console.log(printFullName({first: "Bob"})); // 'Bob'
console.log(printFullName({first: "Alice", last: "Alisson"})); // 'Alice Alisson'

// Your Task
// Complete the function printFullName(p: { first: string; last?: string }): string.
// If last exists, return first + ' ' + last.
// Otherwise, return just first.
// Examples
// printFullName({ first: 'Bob' }) → 'Bob'
// printFullName({ first: 'Alice', last: 'Alisson' }) → 'Alice Alisson'
