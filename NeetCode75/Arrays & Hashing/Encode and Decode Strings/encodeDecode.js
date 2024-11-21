class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = "";
    for (let s of strs) {
      res += s.length + "#" + s;
    }
    console.log(res);
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const finalArray = [];
    let i = 0;
    let textLength = "";
    while (i < str.length) {
      if (str[i] === "#") {
        let length = parseInt(textLength);
        finalArray.push(str.slice(i + 1, i + length + 1));
        i += length + 1;
        textLength = "";
      } else {
        textLength += str[i];
        i++;
      }
    }
    return finalArray;
  }
}
