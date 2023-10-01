interface Nucleotide {
  A: number;
  C: number;
  G: number;
  T: number;
}

export function nucleotideCounts(dna: string): Nucleotide {
  const result: Nucleotide = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };

  dna.split("").forEach((char) => {
    if (
      result[char as keyof Nucleotide] === 0 ||
      result[char as keyof Nucleotide]
    ) {
      result[char as keyof Nucleotide]++;
    } else {
      throw new Error("Invalid nucleotide in strand");
    }
  });
  return result;
}