declare module '*.css' {
  const content: { [className: string]: string };
  export = content;
}

declare namespace MissionUtils {
  class Random {
    static pickNumberInList(arr: Array<number>): number;
  }
}
