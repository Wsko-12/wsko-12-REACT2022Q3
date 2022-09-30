import { nameReg, zipCodeReg } from '../regex';

describe('Regexps', () => {
  describe('Name regexps', () => {
    test('should return true with letters', () => {
      const reg = new RegExp(nameReg);
      const str = 'AaBbCcDdZz';
      expect(reg.test(str)).toBe(true);
    });

    test('min length should be 2', () => {
      const reg = new RegExp(nameReg);
      expect(reg.test('A')).toBe(false);
      expect(reg.test('AA')).toBe(true);
    });

    test('max length should be 15', () => {
      const reg = new RegExp(nameReg);
      expect(reg.test('A'.repeat(15))).toBe(true);
      expect(reg.test('A'.repeat(16))).toBe(false);
    });

    test('should block numbers', () => {
      const reg = new RegExp(nameReg);
      const str = 'A111';
      expect(reg.test(str)).toBe(false);
    });

    test('should block spaces', () => {
      const reg = new RegExp(nameReg);
      const str = 'A A';
      expect(reg.test(str)).toBe(false);
    });

    test('should block symbols', () => {
      const reg = new RegExp(nameReg);
      expect(reg.test('a,')).toBe(false);
      expect(reg.test('a.')).toBe(false);
      expect(reg.test('a-')).toBe(false);
      expect(reg.test('a+')).toBe(false);
      expect(reg.test('a;')).toBe(false);
      expect(reg.test('a:')).toBe(false);
      expect(reg.test('a"')).toBe(false);
      expect(reg.test("a'")).toBe(false);
      expect(reg.test('a#')).toBe(false);
      expect(reg.test('a!')).toBe(false);
      expect(reg.test('a@')).toBe(false);
      expect(reg.test('a(')).toBe(false);
      expect(reg.test('a)')).toBe(false);
      expect(reg.test('a$')).toBe(false);
      expect(reg.test('a!')).toBe(false);
      expect(reg.test('a$')).toBe(false);
      expect(reg.test('a%')).toBe(false);
    });
  });

  describe('Zip-code regexps', () => {
    test('should return true correct zip', () => {
      const reg = new RegExp(zipCodeReg);
      expect(reg.test('111')).toBe(true);
      expect(reg.test('111-111')).toBe(true);
    });

    test('min length should be 3 without dash and 2 with dash', () => {
      const reg = new RegExp(zipCodeReg);
      expect(reg.test('11')).toBe(false);
      expect(reg.test('1-1')).toBe(false);
    });

    test('should block letters', () => {
      const reg = new RegExp(zipCodeReg);
      const str = 'aaa-aaa';
      expect(reg.test(str)).toBe(false);
    });
  });
});
