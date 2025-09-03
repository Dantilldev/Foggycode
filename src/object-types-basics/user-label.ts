type Account2 = {id: number; name: string};

function userLabel(user: Account2): string {
  return "id:" + user.id + " name:" + user.name;
}

console.log(userLabel({id: 1, name: "A"})); // 'id:1 name:A'
console.log(userLabel({id: 42, name: "Taylor"})); //'id:42 name:Taylor'

// Your Task
// Complete the function userLabel(user: { id: number; name: string }): string.
// Return the string 'id:' + user.id + ' name:' + user.name.
// Do not mutate user.
// Examples
// userLabel({ id: 1, name: 'A' }) → 'id:1 name:A'
// userLabel({ id: 42, name: 'Taylor' }) → 'id:42 name:Taylor'
