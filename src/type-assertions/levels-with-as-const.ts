const LEVELS = ["info", "warn", "error"] as const; // TODO: define as const literal array

type Level = (typeof LEVELS)[number]; // TODO

function tag(level: Level, msg: string): string {
  // TODO
  return `[${level.toLocaleUpperCase()}] ${msg}`;
}

console.log(tag("info", "System started")); // [INFO] System started
console.log(tag("warn", "Low battery")); //[WARN] Low battery
console.log(tag("error", "Crash!")); // [ERROR]

// Levels with as const
// String literals widen to string unless you freeze them. as const keeps exact literals and makes arrays/objects read-only. From a literal array, you can build a union of its items.

// You will define a set of log levels using as const and use that union in a function.

// const COLORS = ["red", "green", "blue"] as const;
// type Color = (typeof COLORS)[number];
// Your Task
// Build levels with as const and tag messages.

// Declare const LEVELS = ['info','warn','error'] as const.
// Create type Level = typeof LEVELS[number].
// Implement tag(level: Level, msg: string): string that returns '[LEVEL] ' + msg with LEVEL uppercased.
// Keep the function pure.>
