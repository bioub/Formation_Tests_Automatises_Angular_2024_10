export function asyncCallback() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 10_000);
  });
}
