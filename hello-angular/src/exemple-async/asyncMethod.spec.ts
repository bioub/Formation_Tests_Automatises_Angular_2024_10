import { AsyncClass } from "./asyncMethod";

describe('asyncClass', () => {

  describe('asyncMethod', () => {
    it('should update foo prop', () => {
      const obj = new AsyncClass();
      obj.asyncMethod();

      // comment attendre ???
    });
  })

})
