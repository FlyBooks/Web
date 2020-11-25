class MyIterator {
  constructor() {
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    this.length = arguments.length;
  }

  [Symbol.iterator]() {
    let that = this;
    that.index = 0;

    return {
      next() {
        if (that.index < that.length) { 
          return {
            value: that[that.index++],
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  }
}
