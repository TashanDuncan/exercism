export function compute(left: string, right: string): number {
  let result = 0;
  if (left === right) {
    return result;
  }
  if (left.length !== right.length) {
    throw new Error("DNA strands must be of equal length.");
  }
  const dnaLeft = left.split("");
  const dnaRight = right.split("");

  dnaLeft.forEach((cell, index) => {
    if (cell !== dnaRight[index]) {
      result++;
    }
  });
  return result;
}

compute("AG", "CT");
