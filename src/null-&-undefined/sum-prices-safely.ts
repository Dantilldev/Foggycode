interface Item {
  name: string;
  price?: number | null;
}

function totalPrice(items: Item[]): number {
  let sum = 0;
  items.forEach((item) => {
    sum += item.price ?? 0;
  });
  return sum;
}

// Davids Version

// interface Item {
//  name: string;
//  price?: number | null;
// }

// function totalPrice(items: Item[]): number {
//  // TODO
// let sum = 0;

// for(let i=0; i<items.length; i++ ){
//  const val =  items[i].price ?? 0;

//   sum += val
// }

//  return sum

// }

// Sum Prices Safely
// Arrays often include items with missing numbers. A price may be undefined or null. Sum only the numbers and treat missing as 0.

// const prices = [1, undefined, 3, null];
// const total = prices.reduce((acc, p) => acc + (p ?? 0), 0);
// Keep the function pure and return a number result.

// Your Task
// Add up prices, skipping missing values.

// Define interface Item { name: string; price?: number | null }.
// Write function totalPrice(items: Item[]): number.
// Treat null and undefined prices as 0.
// Do not mutate the input array or its items.
// Return 0 for an empty list.
