var _initProto;

class Foo {
  constructor(...args) {
    _initProto(this);
  }

  a() {
    return 1;
  }

  a() {
    return 2;
  }

}

(() => {
  [_initProto] = babelHelpers.applyDecs(Foo, [[dec, 2, "a"], [dec, 2, "a"]], []);
})();
