import { getPagesIndexes } from 'utils/utils';

describe('getPagesIndexes', () => {
  test('should return correct indexes count', () => {
    let indexes = getPagesIndexes(5, 1, 6);
    expect(indexes.length).toBe(5);

    indexes = getPagesIndexes(5, 1, 4);
    expect(indexes.length).toBe(4);
  });

  test('should return correct value if it first pages', () => {
    let indexes = getPagesIndexes(5, 1, 6);
    const result = [1, 2, 3, 4, 5];
    expect(indexes).toStrictEqual(result);
    indexes = getPagesIndexes(5, 2, 6);
    expect(indexes).toStrictEqual(result);

    indexes = getPagesIndexes(5, 3, 6);
    expect(indexes).toStrictEqual(result);

    indexes = getPagesIndexes(6, 3, 6);
    expect(indexes).toStrictEqual([1, 2, 3, 4, 5, 6]);

    indexes = getPagesIndexes(3, 2, 6);
    expect(indexes).toStrictEqual([1, 2, 3]);

    indexes = getPagesIndexes(3, 1, 6);
    expect(indexes).toStrictEqual([1, 2, 3]);
  });

  test('should return correct value if it page in middle', () => {
    let indexes = getPagesIndexes(5, 4, 6);
    expect(indexes).toStrictEqual([2, 3, 4, 5, 6]);

    indexes = getPagesIndexes(6, 4, 6);
    expect(indexes).toStrictEqual([1, 2, 3, 4, 5, 6]);

    indexes = getPagesIndexes(3, 4, 6);
    expect(indexes).toStrictEqual([3, 4, 5]);
  });

  test('should return correct value if it last pages', () => {
    let indexes = getPagesIndexes(5, 6, 6);
    expect(indexes).toStrictEqual([2, 3, 4, 5, 6]);

    indexes = getPagesIndexes(5, 5, 6);
    expect(indexes).toStrictEqual([2, 3, 4, 5, 6]);

    indexes = getPagesIndexes(3, 3, 3);
    expect(indexes).toStrictEqual([1, 2, 3]);

    indexes = getPagesIndexes(7, 5, 7);
    expect(indexes).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
