interface Api {
  // TODO
  version: number;
}

interface Api {
  // TODO
  name: string;
}

function describeApi(a: Api): string {
  // TODO
  return `API v${a.version} - ${a.name}`;
}

//test
console.log(describeApi({version: 1, name: "MyAPI"})); // "API v<version> - <name>".

// Your Task
// Describe an API by merging interfaces, then format a label.

// Declare two interface Api blocks so Api has both version: number and name: string.
// Implement describeApi(a: Api): string that returns "API v<version> - <name>".
// Use a single object with both properties in tests to satisfy Api.
