// Approach 1st

var missingNumber = function (nums) {
  let sortedArray = nums.sort((a, b) => a - b);
  for (i = 0; i < nums.length; i++) {
    if (i != sortedArray[i]) {
      return i;
    }
  }
  return nums.length;
};

// Approach 2nd

var missingNumber = function (nums) {
  let arrayLength = nums.length;
  let sumOfNums = 0;
  let sumOfLength = 0;

  while (arrayLength > 0) {
    sumOfNums = sumOfNums + nums[arrayLength - 1];
    sumOfLength = sumOfLength + arrayLength;
    arrayLength--;
  }

  let resultIs = sumOfLength - sumOfNums;
  return resultIs;
};
