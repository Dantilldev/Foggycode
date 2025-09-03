type PasswordUser1 = {username: string; password: string}; // TODO
type TokenUser1 = {username: string; token: string}; // TODO
type Account1 = PasswordUser1 | TokenUser1; // TODO

function requiresPassword1(a: Account1): boolean {
  // TODO
  return "password" in a;
}

// Testkod:
const passwordUser1: PasswordUser1 = {username: "anna", password: "hemligt"};
const tokenUser1: TokenUser1 = {username: "bengt", token: "abc123xyz"};

console.log(requiresPassword1(passwordUser1)); // true - detta konto kräver lösenord
console.log(requiresPassword1(tokenUser1));

// Lösenord eller Token
// Operatorn 'in' smalnar av en union av objekttyper genom att kontrollera om en egenskap finns.
// Om 'password' in user är sant, vet du att du har varianten som använder lösenord.

// function needsPwd(u: { password: string } | { token: string }) {
//   return "password" in u;
// }
// Returnera en boolean så att du kan styra beslut med enkla villkor.

// Din uppgift
// Avgör om ett konto kräver ett lösenord.

// Definiera typen PasswordUser = { username: string; password: string }.
// Definiera typen TokenUser = { username: string; token: string }.
// Definiera typen Account = PasswordUser | TokenUser.
// Skriv funktionen requiresPassword(a: Account): boolean med hjälp av 'in'-operatorn.
// Mutera inte indata.
