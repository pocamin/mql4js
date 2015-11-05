describe('mql4 static arrays', function () {
  it('can be created by providing multi-dimensional data', function () {
    var array = mql4.newArray({dimensions: [2, 2, 2], dynamic: false, data: [0, 1, 2, 3, 4, 5, 6, 7]});
    expect(array[1][0][1]).toBe(5);
  });

  it('can be created by providing uni-dimensional data', function () {
    var array = mql4.newArray({dimensions: [5], dynamic: false, data: [false, true, false, true, true]});
    expect(array[2]).toBe(false);
  });

  it('can be created by providing default value', function () {
    var array = mql4.newArray({dimensions: [101], dynamic: false, defaultValue: "test"});
    expect(array[5]).toBe("test");
    expect(array.length).toBe(101);
  });
});

describe('mql4 dynamic arrays', function () {
  it('can be created by providing multi-dimensional data', function () {
    var array = mql4.newArray({dimensions: [2, 2], dynamic: true, data: [0, 1, 2, 3, 4, 5, 6, 7]});
    expect(array[1][0][1]).toBe(5);
  });

  it('can be created by providing uni-dimensional data', function () {
    var array = mql4.newArray({dimensions: [], dynamic: true, data: [false, true, false, true, true]});
    expect(array[2]).toBe(false);
  });


  it('can be created by providing default value', function () {
    var array = mql4.newArray({dimensions: [101], dynamic: true, defaultValue: "test"});
    expect(array.length).toBe(0);
  });

});


describe("Array resize", function () {
  it('Can be performed on a empty dynamic array', function () {
    var array = mql4.newArray({dimensions: [101], dynamic: true, defaultValue: "test"});
    mql4.arrayResize(array, 2);
    expect(array.length).toBe(2);
    expect(array[1][5]).toBe("test");
  });

  it('Can be performed to reduce the size of an existing dynamic array', function () {
    var array = mql4.newArray({dimensions: [], dynamic: true, data: [false, true, false, true, true]});
    mql4.arrayResize(array, 2);
    expect(array.length).toBe(2);
  });

  it('Can be performed to increase the size of an existing dynamic array', function () {
    var array = mql4.newArray({dimensions: [], dynamic: true, data: [false, true, false, true, true]});
    mql4.arrayResize(array, 5);
    expect(array.length).toBe(5);
  });


});




