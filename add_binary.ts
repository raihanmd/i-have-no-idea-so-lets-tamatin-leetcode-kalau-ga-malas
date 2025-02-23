function addBinary(a: string, b: string): string {
  let carry = 0;
  let res = "";
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;

    if (i >= 0) sum += Number(a[i]);
    if (j >= 0) sum += Number(b[j]);

    res = (sum % 2) + res;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return res;
}

console.log(addBinary("11", "1"));
