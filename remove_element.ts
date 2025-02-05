function removeElement(nums: number[], val: number): number {
  let p1 = 0;

  for (let p2 = p1; p2 < nums.length; p2++) {
    if (nums[p2] !== val) {
      nums[p1] = nums[p2];
      p1++;
    }
  }

  return p1;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
