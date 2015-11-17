var a = function (test) {
  [0, 1, 2, 3, 4].map(function f(value) {
    setTimeout(cont(), 1000);
    console.log(value);
  });
};

a();