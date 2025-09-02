interface Address {
  city?: string | null;
}

interface Person2 {
  name: string;
  address?: Address | null;
}

function getCityLabel(p: Person2): string {
  const city = p.address?.city;
  return city && city.trim() !== "" ? city : "Unknown";
}

// Davids Version

// interface Address {
//  city?: string | null;
// }

// interface Person {
//  name: string;
//  address?: Address | null;
// }

// function getCityLabel(p: Person): string {

//   const city = p.address?.city ?? "Unknown";

//   if( city == ""){
//     return "Unknown"

//   }
//   return city

// }

// Get City Label
// Nested data often has missing pieces. A user may have no address, or an address with no city. Optional chaining lets you read user.address?.city without crashing. Use a clear default when the path is missing.

// const city = user.address?.city ?? "Unknown";
// Treat only null and undefined as missing. An empty string is a real string, but you may choose to map it to a default for display.

// Your Task
// Return a display label for a user’s city.

// Define interface Address { city?: string | null } and interface Person { name: string; address?: Address | null }.
// Write function getCityLabel(p: Person): string.
// If city exists and is not an empty string, return it.
// Otherwise return 'Unknown'.
// Do not mutate the input.
