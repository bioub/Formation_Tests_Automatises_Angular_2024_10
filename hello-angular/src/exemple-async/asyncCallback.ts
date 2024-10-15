export function asyncCallback(cb: () => void) {
  setTimeout(() => {
    cb()
  }, 10_000);
}
