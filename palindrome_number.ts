function isPalindrome(x: number): boolean {
  return +x.toString().split("").reverse().map(Number).join("") === x;
}

isPalindrome(121);
isPalindrome(-121);
