function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 !== 10) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
    if (i === 0) {
      digits.unshift(1);
      return digits;
    }
  }
  return digits;
}

console.log(plusOne([1, 2, 3]));
console.log(plusOne([9, 9]));
