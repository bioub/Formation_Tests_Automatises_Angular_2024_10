export function asyncCallback(cb: () => void) {
  setTimeout(() => {
    cb()
  }, 1000);
}
