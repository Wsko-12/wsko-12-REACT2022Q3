export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getPagesIndexes = (maxButtons: number, current: number, total: number) => {
  if (total === 1) {
    return [1];
  }

  const count = maxButtons < total ? maxButtons : total;
  return new Array(count).fill(null).map((_, i) => {
    // count = 5
    // current = 3
    //this means must be showed 1,2,3,4,5
    if (current <= Math.ceil(count / 2)) {
      return i + 1;
    }

    // current = 10
    // total = 11
    //this means must be showed 7,8,9,10,11
    if (current > total - Math.ceil(count / 2)) {
      return total + (i + 1 - count);
    }

    // current === 4
    //this means must be showed 2,3,4,5,6
    return current + (i - Math.floor(count / 2));
  });
};
