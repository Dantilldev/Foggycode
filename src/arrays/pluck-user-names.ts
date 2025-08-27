function pluckNames(users: {id: number; name: string}[]): string[] {
  // TODO: return a NEW array of names
  return users.map((user) => user.name);
}

console.log(
  pluckNames([
    {id: 1, name: "Ada"},
    {id: 2, name: "Lin"},
  ])
); // ['Ada', 'Lin']
console.log(pluckNames([])); // []

// Your Task
// Complete pluckNames(users: { id: number; name: string }[]): string[].
// Return a new array of names.
// Examples
// pluckNames([{ id: 1, name: 'Ada' }, { id: 2, name: 'Lin' }]) → ['Ada', 'Lin']
// pluckNames([]) → []
