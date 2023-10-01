const proteinMap = new Map([
  ["AUG", "Methionine"],
  ["UUU", "Phenylalanine"],
  ["UUC", "Phenylalanine"],
  ["UUA", "Leucine"],
  ["UUG", "Leucine"],
  ["UCU", "Serine"],
  ["UCC", "Serine"],
  ["UCA", "Serine"],
  ["UCG", "Serine"],
  ["UAU", "Tyrosine"],
  ["UAC", "Tyrosine"],
  ["UGU", "Cysteine"],
  ["UGC", "Cysteine"],
  ["UGG", "Tryptophan"],
  ["UAA", "STOP"],
  ["UAG", "STOP"],
  ["UGA", "STOP"],
]);
export function translate(rna: string): string[] | [] {
  let splitRna = rna.match(/.{1,3}/g);
  const result: string[] = [];

  if (splitRna) {
    for (const codon of splitRna) {
      if (proteinMap.has(codon)) {
        if (proteinMap.get(codon) === "STOP") {
          break;
        } else {
          result.push(proteinMap.get(codon)!);
        }
      }
    }
  }
  return result;
}
