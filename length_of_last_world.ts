function lengthOfLastWord(s: string): number {
  let end = s.length;

  while (s[end] === " " || typeof s[end] === "undefined") {
    end--;
  }

  let start = end - 1;

  while (s[start] !== " " && start > -1) {
    start--;
  }

  return end - start;
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("Hello World  "));
console.log(lengthOfLastWord("a"));
console.log(lengthOfLastWord("day"));
