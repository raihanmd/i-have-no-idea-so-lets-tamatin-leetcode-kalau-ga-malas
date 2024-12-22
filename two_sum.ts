function twoSum(nums: number[], target: number): number[] {
  let out: number[] = [];

  const map = new Map();
  nums.forEach((val, i) => {
    if (map.has(target - val)) {
      out.push(map.get(target - val));
      out.push(i);
    }

    map.set(val, i);
  });

  return out;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 1], 3));
