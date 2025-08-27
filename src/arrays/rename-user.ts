function renameUser2(
  users: {id: number; name: string}[],
  id: number,
  newName: string
): {id: number; name: string}[] {
  // TODO: return a NEW array; update only the matching user by returning a NEW object
  return users.map((user) =>
    user.id === id ? {...user, name: newName} : user
  );
}

console.log(renameUser2([{id: 1, name: "Ada"}], 1, "Lin"));
console.log(renameUser2([{id: 1, name: "Ada"}], 2, "Lin"));

// Your Task
// Complete renameUser(users: { id: number; name: string }[], id: number, newName: string): { id: number; name: string }[].
// Return a new array.
// For the matching user, return a new object with the updated name.
// Leave all other users unchanged (same references are fine).
// Examples
// renameUser([{ id: 1, name: 'Ada' }], 1, 'Lin') → [{ id: 1, name: 'Lin' }]
// renameUser([{ id: 1, name: 'Ada' }], 2, 'Lin') → [{ id: 1, name: 'Ada' }]
