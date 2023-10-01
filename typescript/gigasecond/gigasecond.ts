export class Gigasecond {
  moment: number;
  constructor(moment: Date) {
    this.moment = moment.getTime();
  }
  public date(): Date {
    return new Date(this.moment + 1000000000000);
  }
}
