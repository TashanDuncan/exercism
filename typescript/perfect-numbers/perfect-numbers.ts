type ClassificationScheme = "perfect" | "abundant" | "deficient";
export function classify(num: number): ClassificationScheme {
  if (num <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  const factors: number[] = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      console.log(i);
      factors.push(i);
    }
  }
  const sumOfFactors = factors.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  if (num === sumOfFactors) {
    return "perfect";
  }

  if (num < sumOfFactors) {
    return "abundant";
  }

  if (num > sumOfFactors) {
    return "deficient";
  }

  throw new Error("Classification is only possible for natural numbers.");
}

console.log(classify(4));
