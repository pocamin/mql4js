describe('mql4js can convert', function () {
  describe('expressionsEvaluation', function () {
    it('-expr', function () {
      assertParseEquals("expression", "-a", "-a");
    });
    it('-expr', function () {
      assertParseEquals("expression", "!a", "!a");
    });
    it('-expr', function () {
      assertParseEquals("expression", "!a", "!a");
    });
    it('a = b', function () {
      assertParseEquals("expression", "a=b", "a=b");
    });
    it('a = b', function () {
      assertParseEquals("expression", 'a = b', 'a = b');
    });
    it('a += b', function () {
      assertParseEquals("expression", 'a += b', 'a += b');
    });
    it('a -= b', function () {
      assertParseEquals("expression", 'a -= b', 'a -= b');
    });
    it('a *= b', function () {
      assertParseEquals("expression", 'a *= b', 'a *= b');
    });
    it('a /= b', function () {
      assertParseEquals("expression", 'a /= b', 'a /= b');
    });
    it('a %= b', function () {
      assertParseEquals("expression", 'a %= b', 'a %= b');
    });
    it('a >>= b', function () {
      assertParseEquals("expression", 'a >>= b', 'a >>= b');
    });
    it('a <<= b', function () {
      assertParseEquals("expression", 'a <<= b', 'a <<= b');
    });
    it('a &= b', function () {
      assertParseEquals("expression", 'a &= b', 'a &= b');
    });
    it('a |= b', function () {
      assertParseEquals("expression", 'a |= b', 'a |= b');
    });
    it('a ^= b', function () {
      assertParseEquals("expression", 'a ^= b', 'a ^= b');
    });
    it('--a', function () {
      assertParseEquals("expression", '--a', '--a');
    });
    it('++a', function () {
      assertParseEquals("expression", '++a', '++a');
    });
    it('a++', function () {
      assertParseEquals("expression", 'a++', 'a++');
    });
    it('a--', function () {
      assertParseEquals("expression", 'a--', 'a--');
    });
    it('a >> b', function () {
      assertParseEquals("expression", 'a >> b', 'a >> b');
    });
    it('a << b', function () {
      assertParseEquals("expression", 'a << b', 'a << b');
    });
    it('a & b', function () {
      assertParseEquals("expression", 'a & b', 'a & b');
    });
    it('a | b', function () {
      assertParseEquals("expression", 'a | b', 'a | b');
    });
    it('a ^ b', function () {
      assertParseEquals("expression", 'a ^ b', 'a ^ b');
    });
    it('a * b', function () {
      assertParseEquals("expression", 'a * b', 'a * b');
    });
    it('a / b', function () {
      assertParseEquals("expression", 'a / b', 'a / b');
    });
    it('a % b', function () {
      assertParseEquals("expression", 'a % b', 'a % b');
    });
    it('a + b', function () {
      assertParseEquals("expression", 'a + b', 'a + b');
    });
    it('a - b', function () {
      assertParseEquals("expression", 'a - b', 'a - b');
    });
    it('a >= b', function () {
      assertParseEquals("expression", 'a >= b', 'a >= b');
    });
    it('a <= b', function () {
      assertParseEquals("expression", 'a <= b', 'a <= b');
    });
    it('a > b', function () {
      assertParseEquals("expression", 'a > b', 'a > b');
    });
    it('a < b', function () {
      assertParseEquals("expression", 'a < b', 'a < b');
    });
    it('a == b', function () {
      assertParseEquals("expression", 'a == b', 'a === b');
    });
    it('a != b', function () {
      assertParseEquals("expression", 'a != b', 'a !== b');
    });
    it('a && b', function () {
      assertParseEquals("expression", 'a && b', 'a && b');
    });
    it('a || b', function () {
      assertParseEquals("expression", 'a || b', 'a || b');
    });
    it('a.b', function () {
      assertParseEquals("expression", 'a.b', 'a.b');
    });
    it('a?b:c', function () {
      assertParseEquals("expression", 'a?b:c', 'a?b:c');
    });
    it('(a)', function () {
      assertParseEquals("expression", '(a)', '(a)');
    });
    it('test(a,b)', function () {
      assertParseEquals("expression", 'test(a,b)', 'test(a,b)');
    });
    it('test(a)', function () {
      assertParseEquals("expression", 'test(a)', 'test(a)');
    });
    it('test()', function () {
      assertParseEquals("expression", 'test()', 'test()');
    });
    it('a[5,2]', function () {
      assertParseEquals("expression", 'a[5,2]', 'a[5][2]');
    });
    it('NULL', function () {
      assertParseEquals("expression", 'NULL', 'null');
    });
    it('true', function () {
      assertParseEquals("expression", 'true', 'true');
    });
    it('false', function () {
      assertParseEquals("expression", 'false', 'false');
    });
    it('""', function () {
      assertParseEquals("expression", '""', '""');
    });
    it('"test"', function () {
      assertParseEquals("expression", '"test"', '"test"');
    });
    it('124', function () {
      assertParseEquals("expression", '124', '124');
    });
    it('12.4', function () {
      assertParseEquals("expression", '12.4', '12.4');
    });
    it('1e+4', function () {
      assertParseEquals("expression", '1e+4', '1e+4');
    });
    it('1e-4', function () {
      assertParseEquals("expression", '1e-4', '1e-4');
    });
    it("'a'", function () {
      assertParseEquals("expression", "'a'", "'a'.charCodeAt(0)");
    });
  });
});
