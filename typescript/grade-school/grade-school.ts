interface Roster {
  [key: number]: string[];
}
export class GradeSchool {
  private data: Roster = {};


  roster(): Roster | {} {
    const result = Object.keys(this.data).reduce(
      (accumulator: Roster, currentValue: any) => {
        accumulator[currentValue] = this.data[currentValue];
        return accumulator;
      },
      {}
    )
    return result ? JSON.parse(JSON.stringify(result))
    : {}
  }

  add(name: string, grade: number): void {
    for (const key in this.data) {
      if (this.data[key].includes(name)) {
        var index = this.data[key].indexOf(name);
        this.data[key].splice(index, 1);
      }
    }
    if (!this.data[grade]) {
      this.data[grade] = new Array(name);
    } else {
      this.data[grade].push(name);
      this.data[grade] = this.data[grade].sort();
    }
  }

  grade(grade: number): string[] | [] {
    return this.data[grade] ? JSON.parse(JSON.stringify(this.data[grade])) : [];
  }
}