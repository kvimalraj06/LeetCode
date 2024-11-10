/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const groupedAnagrams = {};
  for (let str of strs) {
    const count = new Array(26).fill(0);
    for (let letter of str) {
      count[letter.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    const key = count.join(",");
    if (!groupedAnagrams[key]) {
      groupedAnagrams[key] = [];
    }
    groupedAnagrams[key].push(str);
  }
  return Object.values(groupedAnagrams);
};
