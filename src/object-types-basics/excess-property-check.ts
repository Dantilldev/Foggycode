type User = {id: number; name: string};

function requireBasicUser(u: User): number {
  // TODO: return the id from the user-like object
  return u.id;
}

console.log(requireBasicUser({id: 1, name: "A"}));

// Your Task
// Complete the function requireBasicUser(u: { id: number; name: string }): number.
// Return u.id.
// In type tests we’ll try passing an object literal with an extra property and expect a type error.
// Examples
// requireBasicUser({ id: 1, name: 'A' }) → 1
