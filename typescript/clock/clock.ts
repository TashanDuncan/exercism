const hoursArray = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
];

export class Clock {
  inputHours: number;
  inputMins: number;
  totalMins: number;
  constructor(hour: number, minute = 0) {
    this.inputHours = hour;
    this.inputMins = 0;
    const hoursInMins = 60 * hour;
    this.totalMins = hoursInMins;
    this.inputMins = minute;
    this.totalMins += minute;
  }

  private belowZeroCheck(time: number): string {
    return time < 10 ? `0${time}` : `${time}`;
  }

  private calculateHours(hours: number): number {
    // if (hours < 24 && hours > -24) {
      if(Math.abs(hours) < 24){
      return hours;
    } else {
      hours = hours % 24;
      return this.calculateHours(hours);
    }
  }



  public toString(): unknown {
    const hours = this.calculateHours(Math.floor(this.totalMins / 60));
    const minutes = this.totalMins % 60;
    let counter = 0;
    let hoursString;

    if (this.totalMins >= 0) {
      hoursString = hoursArray[hours]
      return `${hoursString}:${this.belowZeroCheck(minutes)}`;
    } else {
      if (Math.abs(hours) === 0) {
        return `00:${minutes === 0 ? "00" : 60 + minutes}`;
      }
      const hoursArrayReversed = [...hoursArray].reverse();
      hoursString = hoursArrayReversed[Math.abs(hours)-1]
      return `${hoursString}:${
        minutes === 0 ? "00" : this.belowZeroCheck(60 + minutes)
      }`;
    }
  }
  public plus(minutes: number): Clock {
    return new Clock(this.inputHours, this.inputMins + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this.inputHours, this.inputMins - minutes);
  }

  public equals(clock: Clock): boolean {
    return clock.toString() === this.toString();
  }
}

// console.log(new Clock(0, 3).minus(4).toString())
// console.log(new Clock(-12, -268).toString())
