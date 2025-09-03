function sumUnknown(input: unknown): number {
  // TODO
  return (input as number[]).reduce((a, b) => a + b, 0);
}

// Test kod

console.log(sumUnknown([1, 2, 3]));

// Sum Unknown Numbers
// unknown is safer than any, but you must prove or assert its shape. If a value is really a number array, you can assert as number[] to use array methods.

// This exercise keeps runtime simple. You will assert and then sum.

// const xs: unknown = [1, 2, 3];
// const total = (xs as number[]).reduce((a, b) => a + b, 0);
// Your Task
// Add up the numbers from an unknown value.

// Implement sumUnknown(input: unknown): number.
// Treat input as number[] using an assertion and return the sum.
// If the array is empty, return 0.
// Do not mutate the array.


/// alt:  let sum = 0;

//  const inputNum = input as number[]

//  for(let i = 0; i < inputNum.length ; i++){
//     sum += inputNum[i]
//  }
//  return sum
