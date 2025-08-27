type Username = {id: number; name: string};

function renameUser(u: Username, newName: string): Username {
  return {id: u.id, name: newName};
}

console.log(renameUser({id: 1, name: "A"}, "B")); // { id: 1, name: 'B' }

// Your Task
// Complete the function renameUser(u: { id: number; name: string }, newName: string): { id: number; name: string }.
// Return a new object with the same id and the updated name.
// Do not modify the input object.
// Examples
// renameUser({ id: 1, name: 'A' }, 'B') → { id: 1, name: 'B' }
