export class Robot {
  private _name: string | undefined;
  public static _usedNames = new Set();

  constructor() {
    this._name = this.generateName();
  }

  private generateName(): string | undefined {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    let result: string | undefined = "";

    for (let i = 0; i < 2; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    for (let i = 0; i < 3; i++) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    
  // Add base case to prevent infinite recursion
  if (Robot._usedNames.size >= 26 * 10 * 10 * 10) {
    throw new Error("No more Names");
  }

    if (!Robot._usedNames.has(result)) {
      Robot._usedNames.add(result);
      return result;
    } else {
      // Add return statement after recursive call
      return this.generateName();
    }

  }
  public get name(): string | undefined {
    return this._name;
  }

  public resetName(): void {
    let result = this.generateName()
    this._name = result;
  }

  public static releaseNames(): void {
    Robot._usedNames.clear()
  }
}
