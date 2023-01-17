/*
In cryptography, a Caesar cipher is a simple encryption technique, in which each letter in text is replaced by a letter some fixed number of positions down the alphabet.
For example, with a right shift of 3, a becomes d, b becomes e, and so on until w which become z. Then x, y and z become a, b and c.
Create a function `cipher` which encrypts a word (only in lowercase) using Caesar cipher, where the shift value (which can be positive or negative) is a parameter.
  word:      shift:   result:
* "abcd"     1        "bcde"
* "abcd"     -1       "zabc"
* "tacos"    3        "wdfrv"
* "zebra"    2        "bgdtc"
If `word` is null or not a string, or if `shift` is null or not a number, throw a TypeError.
Add you own tests.
*/

function cipher(word, shift) {
  const numberForA = 97;
  let res = '';
  // TODO nettoyer word
  // - type string
  // - caracteres speciaux, espaces, ...
  // - majuscules

  // TODO nettoyer shift
  // - type number
  if (typeof shift !== 'number') return 'Error!';
  // - [0;25]
  if (shift < 0 || shift > 25) return 'Error!';

  for (let i = 0; i < word.length; i++) {
    const oldLetter = word[i];
    const oldLetterNumber = oldLetter.charCodeAt();
    const newLetterNumber =
      ((oldLetterNumber - numberForA + shift) % 26) + numberForA;
    const newLetter = String.fromCharCode(newLetterNumber);

    res += newLetter;
  }
  return res;
}

// Begin of tests
const assert = require('assert');

assert.strictEqual(typeof cipher, 'function');
assert.strictEqual(cipher.length, 2);
// TODO add your tests:
assert.strictEqual(cipher('a', 1), 'b');
assert.strictEqual(cipher('b', 1), 'c');
assert.strictEqual(cipher('z', 1), 'a');
assert.strictEqual(cipher('a', 3), 'd');
assert.strictEqual(cipher('z', 3), 'c');
assert.strictEqual(cipher('abcd', 1), 'bcde');
// assert.strictEqual(cipher('abcd', -1), 'zabc');
assert.strictEqual(cipher('tacos', 3), 'wdfrv');
assert.strictEqual(cipher('zebra', 2), 'bgdtc');

// End of tests
console.log('Bravo <3');
