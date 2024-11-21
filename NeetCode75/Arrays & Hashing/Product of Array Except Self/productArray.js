/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  prefix = [];
  postfix = [];
  output = [];
  let premultiplier = 1;
  let postmultiplier = 1;
  for (let i = 0; i < nums.length; i++) {
    premultiplier *= nums[i];
    prefix.push(premultiplier);
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    postmultiplier *= nums[i];
    postfix.unshift(postmultiplier);
  }
  for (let i = 0; i < nums.length; i++) {
    const preMultiplier = i === 0 ? 1 : prefix[i - 1];
    const postMultiplier = i === nums.length - 1 ? 1 : postfix[i + 1];
    output.push(preMultiplier * postMultiplier);
  }
  return output;
};
