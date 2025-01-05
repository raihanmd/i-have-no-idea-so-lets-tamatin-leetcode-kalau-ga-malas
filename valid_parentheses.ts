function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i <= s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      if (s.length === 0 || stack.pop() !== brackets[s[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const brackets = {
  ")": "(",
  "]": "[",
  "}": "{",
};
