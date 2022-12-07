import { emailReg, nameReg, zipCodeReg } from '../regex';

describe('Regexps', () => {
  describe('Name regexps', () => {
    const reg = new RegExp(nameReg);

    test('should return true with letters', () => {
      const str = 'AaBbCcDdZz';
      expect(reg.test(str)).toBe(true);
    });

    test('min length should be 2', () => {
      expect(reg.test('A')).toBe(false);
      expect(reg.test('AA')).toBe(true);
    });

    test('max length should be 15', () => {
      expect(reg.test('A'.repeat(15))).toBe(true);
      expect(reg.test('A'.repeat(16))).toBe(false);
    });

    test('should block numbers', () => {
      const str = 'A111';
      expect(reg.test(str)).toBe(false);
    });

    test('should block spaces', () => {
      const str = 'A A';
      expect(reg.test(str)).toBe(false);
    });

    test('should block symbols', () => {
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
    const reg = new RegExp(zipCodeReg);

    test('should return true correct zip', () => {
      expect(reg.test('111')).toBe(true);
      expect(reg.test('111-111')).toBe(true);
    });

    test('min length should be 3 without dash and 2 with dash', () => {
      expect(reg.test('11')).toBe(false);
      expect(reg.test('1-1')).toBe(false);
    });

    test('should block letters', () => {
      const str = 'aaa-aaa';
      expect(reg.test(str)).toBe(false);
    });
  });

  describe('Email regexps', () => {
    const reg = new RegExp(emailReg);

    test('should work with correct email', () => {
      expect(reg.test('test@test.com')).toBe(true);
      expect(reg.test('test123@test.com')).toBe(true);
    });

    test('should return false with incorrect email', () => {
      expect(reg.test('test!@test.com')).toBe(false);
      expect(reg.test('test.@test.com')).toBe(false);
      expect(reg.test('test+@test.com')).toBe(false);
    });

    test('should work with dot in email', () => {
      expect(reg.test('test.test@test.com')).toBe(true);
    });

    test('should return false with dot in the end', () => {
      expect(reg.test('test.@test.com')).toBe(false);
    });

    test('should work with by, ua, ru domains', () => {
      expect(reg.test('test@test.by')).toBe(true);
      expect(reg.test('test@test.ua')).toBe(true);
      expect(reg.test('test@test.ru')).toBe(true);
      expect(reg.test('test@test.test')).toBe(false);
    });
  });
});
