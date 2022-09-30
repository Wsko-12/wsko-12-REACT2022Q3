import { nameReg } from '../regex';

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
});
