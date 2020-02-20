module.exports = function reverse (n) {
  if (n < 0) {n = 0-n}
  return +n.toString().split("").reverse().join('');
}
