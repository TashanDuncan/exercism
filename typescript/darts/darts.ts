export function score(x: number, y: number): number {
  const distance = Math.sqrt(x * x + y * y);
  // Check which circle the dart lands in and calculate the points accordingly
  if (distance > 10) {
    // Dart lands outside the target
    return 0;
  } else if (distance > 5) {
    // Dart lands in the outer circle
    return 1;
  } else if (distance > 1) {
    // Dart lands in the middle circle
    return 5;
  } else {
    // Dart lands in the inner circle
    return 10;
  }
}
