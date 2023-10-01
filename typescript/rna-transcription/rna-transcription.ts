const rna = new Map<string, string>([
  ["G", "C"],
  ["C", "G"],
  ["T", "A"],
  ["A", "U"],
]);
export function toRna(strand: string): string {
  let result: (undefined | string)[] = [];
  const toArr = strand.split("");

  toArr.forEach((dna) => {
    if (rna.has(dna)) {
      result.push(rna.get(dna));
    } else {
      throw new Error("Invalid input DNA.");
    }
  });

  return result.join("");
}
