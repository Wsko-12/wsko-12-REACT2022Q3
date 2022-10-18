export const nameReg = '^[A-Za-z]{2,15}$';
export const zipCodeReg = '^[0-9]{3,8}$|^[0-9]{2,5}-[0-9]{2,5}$';
// export const emailReg = '^[a-zA-z.0-9]+[a-zA-z0-9]@[a-zA-z]+.com|.by|.ua|.ru$'; // strange, better use Google
// RFC 5322 Official Standard
// SyntaxError: Invalid regular expression: Lone quantifier brackets
// can't find this bracket :(
export const emailReg =
  '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';
