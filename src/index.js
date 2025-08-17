module.exports = function reverse(n) {
  const arr = Math.abs(n).toString().split('');
  arr.reverse();
  const str = +arr.join('');
  return str;
};
