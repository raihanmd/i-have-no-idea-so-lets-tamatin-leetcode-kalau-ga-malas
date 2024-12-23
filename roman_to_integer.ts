function romanToInt(s: string): number {
  const ROMAN = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let sum: number = ROMAN.get(s[s.length - 1])!;
  for (let i = 0; i < s.length - 1; i++) {
    let sign = ROMAN.get(s[i])! >= ROMAN.get(s[i + 1])! ? 1 : -1;

    sum += sign * ROMAN.get(s[i])!;
  }

  return sum;
}

console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("LVIII"));
