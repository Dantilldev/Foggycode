interface User2 {
  name: string;
  email?: string | null;
}

function normalizeEmail(u: User2): User2 {
  // TODO
  const email = u.email?.trim().toLocaleLowerCase();

  if (!email) {
    const {email, ...rest} = u;
    return rest;
  }

  return {...u, email};
}

console.log(normalizeEmail({name: "Ada", email: "  ADA@EXAMPLE.COM  "}));
console.log(normalizeEmail({name: "Bob", email: ""}));
console.log(normalizeEmail({name: "Cleo", email: null}));
console.log(normalizeEmail({name: "Doris"}));

// Normalize Email
// Optional properties can be missing. Sometimes a field is present but set to null. Treat both as “no value.” When a string is present, you can clean it up.

// const raw: string | null | undefined = " A@B.com ";
// const cleaned = raw?.trim().toLowerCase();
// Return a new object when you make changes so callers keep their old data if needed.

// Your Task
// Make a new user object with a normalized email field.

// Define interface User { name: string; email?: string | null }.
// Write function normalizeEmail(u: User): User.
// If email is a string, set it to email.trim().toLowerCase(); if the trimmed value is '', treat it as missing.
// If email is null or undefined, leave it missing.
// Return a new object; do not mutate the input.
