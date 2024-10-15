export function promiseRandomTimeout(value: string) {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(value.toUpperCase());
    }, Math.floor(Math.random() * 1000));
  });
}
