interface GenericFunctionType<T, R> {
  (arg: T): R;
}

interface Weather {
  weather: [];
}

export function pipe<T>(fs: ((arg: any) => any)[]): (arg: any) => any {
  return (arg: any): any => fs.reduce((acc, each) => each(acc), arg);
}

export const truncateDate: (arg: string) => string = date => date.substr(5);

let justForecast: ({}) => [] = pipe([(data: Weather): [] => data.weather]);

export function weather(city: string = "london"): Promise<{}> {
  return fetch(`http://wttr.in/${city}?format=j1`)
    .then(res => res.json())
    .then(data => justForecast(data));
}
