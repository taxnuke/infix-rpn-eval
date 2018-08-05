module.exports = new Map([
  ['2 + 3 ^ 3 * ( 1 + 4 )', '2 3 3 ^ 1 4 + * +'],
  ['2 * 2 * 2', '2 2 * 2 *'],
  ['( 3 + 4 ) * ( 1 + 2 )', '3 4 + 1 2 + *'],
  ['2 + 2 * 2 + 2', '2 2 2 * + 2 +'],
  ['x ^ y / 5 * z + 10', 'x y ^ 5 / z * 10 +'],
  ['x ^ y / ( 5 * z ) + 10', 'x y ^ 5 z * / 10 +'],
  ['a / b / c / d', 'a b / c / d /'],
  ['a ^ b ^ c ^ d', 'a b c d ^ ^ ^'],
  ['a * b + c * d', 'a b * c d * +'],
  ['( a + b ) * c - ( d - e ) * ( f + g )', 'a b + c * d e - f g + * -'],
]);