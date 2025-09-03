// Callable Formatter Object

interface Formatter {
  // TODO: call signature and label
  label: any;
}

function makeFormatter(prefix: string): Formatter {
  // TODO
  const f: any = (n: number) => "";
  f.label = prefix;
  return f;
}

// In JavaScript, functions are objects. In TypeScript, an interface can include a call signature and extra properties. This lets you create a callable object with fields.

// You will build a function that returns a callable formatter with a label property.

// interface ToText {
//   (n: number): string;
//   label: string;
// }
// Your Task
// Build a factory that returns a callable formatter with a label.

// Declare interface Formatter { (n: number): string; label: string }.
// Implement makeFormatter(prefix: string): Formatter.
// The returned function should format as "<prefix><n>" and also have label === prefix.
// Keep the implementation small.
