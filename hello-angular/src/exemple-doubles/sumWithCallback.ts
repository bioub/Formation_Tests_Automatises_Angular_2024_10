export function sumWithCallback(a: number, b: number, endCallback: (result: number) => void) {
  // do something
  console.log(endCallback(a + b));

}
