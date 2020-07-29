// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const st = n.toString();
  const reversed = [...st].reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}

reverseInt(-12345);

module.exports = reverseInt;
