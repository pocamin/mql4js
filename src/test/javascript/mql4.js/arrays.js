describe('mql4.js supports', function () {
  describe('newArray function', function () {
    it('for static arrays with multi-dimensional data', function () {
      var array = mql4.newArray({dimensions: [2, 2, 2], dynamic: false, data: [0, 1, 2, 3, 4, 5, 6, 7]});
      expect(array[1][0][1]).toBe(5);
    });

    it('for static arrays with uni-dimensional data', function () {
      var array = mql4.newArray({dimensions: [5], dynamic: false, data: [false, true, false, true, true]});
      expect(array[2]).toBe(false);
    });

    it('for static arrays with default value', function () {
      var array = mql4.newArray({dimensions: [101], dynamic: false, defaultValue: "test"});
      expect(array[5]).toBe("test");
      expect(array.length).toBe(101);
    });

    it('for dynamic arrays with multi-dimensional data', function () {
      var array = mql4.newArray({dimensions: [2, 2], dynamic: true, data: [0, 1, 2, 3, 4, 5, 6, 7]});
      expect(array[1][0][1]).toBe(5);
    });

    it('for dynamic arrays with uni-dimensional data', function () {
      var array = mql4.newArray({dimensions: [], dynamic: true, data: [false, true, false, true, true]});
      expect(array[2]).toBe(false);
    });


    it('for dynamic arrays with default value', function () {
      var array = mql4.newArray({dimensions: [101], dynamic: true, defaultValue: "test"});
      expect(array.length).toBe(0);
    });
  });

  describe('arrayResize function', function () {
    it('on a empty dynamic array', function () {
      var array = mql4.newArray({dimensions: [101], dynamic: true, defaultValue: "test"});
      mql4.arrayResize(array, 2);
      expect(array.length).toBe(2);
      expect(array[1][5]).toBe("test");
    });

    it('to reduce the size of an existing dynamic array', function () {
      var array = mql4.newArray({dimensions: [], dynamic: true, data: [false, true, false, true, true]});
      mql4.arrayResize(array, 2);
      expect(array.length).toBe(2);
    });

    it('to increase the size of an existing dynamic array', function () {
      var array = mql4.newArray({dimensions: [], dynamic: true, data: [false, true, false, true, true]});
      mql4.arrayResize(array, 5);
      expect(array.length).toBe(5);
    });
  });

});
