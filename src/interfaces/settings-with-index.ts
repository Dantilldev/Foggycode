interface Settings {
  // TODO
  [key: string]: string | number | boolean;
}

function countEnabled(s: Settings): number {
  // TODO

  let count = 0;

  for (let key in s) {
    const val = s[key];

    if (val === true) {
      count++;
    }
    return count;
  }

  return 0;
}

const settings: Settings = {
  darkMode: true,
  fontSize: 16,
  showLineNumbers: false,
};

console.log(countEnabled(settings));

// Your Task
// Count enabled flags in a settings object.

// Define interface Settings { [key: string]: string | number | boolean }.
// Implement countEnabled(s: Settings): number that returns how many values are exactly true.
// Return 0 when the object has no keys.
// Do not mutate the input.
