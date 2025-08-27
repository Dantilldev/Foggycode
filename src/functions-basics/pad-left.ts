console.log("---Pad left---");

function padLeft(s: string, width: number = 0): string {
  // TODO: apply left padding using the default when width is omitted
  if (width === 0) {
    return s;
  }
  return " ".repeat(width) + s;
}
console.log(padLeft("x", 3)); //   x
console.log(padLeft("x")); // x

// Lägger till mellanslag till vänster om en sträng.
// Om inget breddvärde anges används 0 (ingen padding).
// Exempel: padLeft('x', 3) → '   x'
