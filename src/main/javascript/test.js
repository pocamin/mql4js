(function () { // Js file generated using Mql4ToJs on Wed Nov 04 2015 16:32:59 GMT+0100 (CET)
//BEGIN Script Parameters
  var $externalParameters = [{name: {type: 'string', defaultValue: "world"}}
  ];
  var $parameters = {
    name: "world"
  };
// END Script Parameters

  var name = $parameters.name;

  var test = function () {
    console.log("hello " + name);
  }

  var test2 = function () {
    test();
    console.log(("test" === "toto") + " " + (Math.PI));
  }

  $parameters.name = "world";
  test()
})()