interface Item {
  // TODO
  readonly sku: string;
  name: string;
  stock?: number;
}

function restock(item: Item, amount: number): Item {
  // TODO
  if (item.stock) {
    return {...item, stock: item.stock + amount};
  }
  return {...item, stock: amount};
}

// testkod

// Increase stock without changing the original item.

// Define interface Item { readonly sku: string; name: string; stock?: number }.
// Implement restock(item: Item, amount: number): Item that returns a new object with stock increased by amount (use 0 when stock is missing).
// Preserve all other fields and keep sku unchanged.
