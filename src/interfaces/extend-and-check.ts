interface Named {
  // TODO
  name: string;
}

interface WithContact extends Named {
  // TODO
  email?: string;
}

function canEmail(c: WithContact): boolean {
  // TODO

  return !!(c.email && c.email != ""); // specialre, fungerar som nedan

  //if(c.email && c.email != ""){
  //return true

  ////return false
}

// return typeof c.email === "string" && c.email.length > 0; ?????

// Your Task
// Decide if a contact can be emailed.

// Define interface Named { name: string }.
// Define interface WithContact extends Named { email?: string }.
// Implement canEmail(c: WithContact): boolean that returns true only when email exists and is not an empty string.
// Do not mutate the input.
