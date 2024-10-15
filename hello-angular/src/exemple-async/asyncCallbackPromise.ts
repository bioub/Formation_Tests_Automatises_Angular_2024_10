export function asyncCallback() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000);
  });
}
