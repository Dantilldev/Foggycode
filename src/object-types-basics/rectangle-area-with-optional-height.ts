type Rect2 = {width: number; height?: number};

function area2(rect: Rect2): number {
  // TODO: compute area depending on whether height is provided
  if (rect.height) {
    return rect.width * rect.height;
  }
  return rect.width * rect.width;
}
console.log(area2({width: 3})); // 9
console.log(area2({width: 3, height: 4})); // 12

// Your Task
// Complete the function area(rect: { width: number; height?: number }): number.
// If height exists, return rect.width * rect.height.
// Otherwise, return rect.width * rect.width.
// Examples
// area({ width: 3 }) → 9
// area({ width: 3, height: 4 }) → 12
