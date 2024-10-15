export function returnSecondsAgo(date: Date) {
  return Date.now() - date.getTime();
}
