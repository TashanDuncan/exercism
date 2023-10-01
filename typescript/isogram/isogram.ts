export function isIsogram(phrase: string): boolean {
  const letterSet = new Set<string>();

  return phrase
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .every((letter) => (letterSet.has(letter) ? false : letterSet.add(letter)));
}
