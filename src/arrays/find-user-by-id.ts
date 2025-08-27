function findUserById(
  users: {id: number; name: string}[],
  id: number
): {id: number; name: string} | undefined {
  // TODO: use Array.prototype.find to return the matching user or undefined
  return users.find((user) => user.id === id);
}

console.log(findUserById([{id: 1, name: "Ada"}], 1)); // { id: 1, name: 'Ada' }
console.log(findUserById([{id: 1, name: "Ada"}], 2)); // undefined

// Your Task
// Complete findUserById(users: { id: number; name: string }[], id: number): { id: number; name: string } | undefined.
// Return the user if found, otherwise undefined.
// Examples
// findUserById([{ id: 1, name: 'Ada' }], 1) → { id: 1, name: 'Ada' }
// findUserById([{ id: 1, name: 'Ada' }], 2) → undefined
