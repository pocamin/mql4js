var objectUnderTest = {
  "allIndicators": {},
  "openBlocks": [
    {
      "expressions": ["tick.bid>env.mainBarAdapter.last().close"],
      "order": {"side": "bid", "amount": "1000"}
    }
  ],
  "closeBlocks": []
};


describe("test", function () {
  fit("test", function () {
    console.info(toJavaScript(objectUnderTest));
  });
});


