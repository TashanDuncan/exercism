export function steps(count: number, result: number = 0): number {
  if (count <= 0) {
    throw new Error("Only positive numbers are allowed");
  }
  if (count === 1) {
    return result;
  } else if (count % 2 === 0) {
    result++; //1
    return steps((count /= 2), result);
  } else {
    result++;
    return steps((count *= 3) + 1, result);
  }
}
