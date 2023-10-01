export class Anagram {
  input:string
  sortedInput: string;

  constructor(input: string) {
    this.input = input
    this.sortedInput = this.sortWord(input.toLowerCase());
  }

  private sortWord(word: string): string {
    return word.split("").sort().join("");
  }

  public matches(...potentials: string[]): string[] {
    return potentials.filter((word) => {
      if (this.sortedInput.length !== word.length) return false;
      if (this.input.toLowerCase() === word.toLowerCase()) return false;
      if (this.sortedInput === this.sortWord(word.toLowerCase())) return true;
      return false;
    });
  }
}
