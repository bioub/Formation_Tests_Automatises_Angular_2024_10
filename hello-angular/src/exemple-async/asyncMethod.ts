export class AsyncClass {

  foo = 'bar';

  asyncMethod() {
    setTimeout(() => {
      this.foo = 'baz';
    }, 1000);

  }
}
