export class Series {
  series: string;
  constructor(series: string) {
    this.series = series;
  }

  slices(sliceLength: number): number[][] {
    if (this.series.length <= 0) {
      throw new Error("series cannot be empty");
    }
    if (this.series.length < sliceLength) {
      throw new Error("slice length cannot be greater than series length");
    }

    if (sliceLength === 0) {
      throw new Error("slice length cannot be zero");
    }

    if (sliceLength < 0) {
      throw new Error("slice length cannot be negative");
    }

    const seriesArray = this.series.split("");
    const result: number[][] = [];

    seriesArray.forEach((number, index) => {
      const slice: number[] = [];
      for (let i = 0; i < sliceLength; i++) {
        if (seriesArray[index + i]) {
          slice.push(parseInt(seriesArray[index + i]));
        }
      }

      if (slice.length === sliceLength) {
        result.push(slice);
      }
    });
    return result;
  }
}
