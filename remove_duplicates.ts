function removeDuplicates(nums: number[]): number {
  let p1 = 1;

  for (let p2 = p1; p2 < nums.length; p2++) {
    if (nums[p2] !== nums[p1 - 1]) {
      nums[p1] = nums[p2];
      p1++;
    }
  }

  return p1;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2]));
