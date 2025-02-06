function strStr(haystack: string, needle: string): number {
  for (let p1 = 0; p1 < haystack.length; p1++) {
    if (haystack.substring(p1, p1 + needle.length) === needle) {
      return p1;
    }
  }

  return -1;
}

console.log(strStr("hello", "ll"));
