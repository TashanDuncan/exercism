const foodMap = new Map<number, string>([
  [128, "cats"],
  [64, "pollen"],
  [32, "chocolate"],
  [16, "tomatoes"],
  [8, "strawberries"],
  [4, "shellfish"],
  [2, "peanuts"],
  [1, "eggs"],
]);

export class Allergies {
  allergenIndex: number;

  constructor(allergenIndex: number) {
    this.allergenIndex = allergenIndex % 256;
  }

  public list(): string[] {
    const result: string[] = [];
    let allergenIndex = this.allergenIndex;
    if (foodMap.has(this.allergenIndex)) {
      result.push(foodMap.get(this.allergenIndex)!);
    } else {
      foodMap.forEach((food, allergyValue) => {
        if (allergenIndex >= allergyValue) {
          allergenIndex -= allergyValue;
          result.unshift(food);
        }
      });
    }

    return result;
  }

  public allergicTo(allergen: string): boolean {
    let result = false;
    if (this.allergenIndex === 0) {
      result = false;
    }
    if (this.list().includes(allergen)) {
      result = true;
    }
    return result;
  }
}
