const fs = require('fs');
const src = fs.readFileSync('bundle.js', 'utf8');

const strings = [];
const re = /"((?:\\.|[^"\\])*)"|'((?:\\.|[^'\\])*)'|`((?:\\.|[^`\\])*)`/g;
let m;
while ((m = re.exec(src)) !== null) {
  const s = m[1] || m[2] || m[3] || '';
  if (
    s.length >= 20 &&
    s.length <= 500 &&
    / /.test(s) &&                       // must contain a space
    /[A-Z]/.test(s) &&                   // must have uppercase letter (UI copy is sentence-cased)
    !s.includes('${') &&                 // skip template literal expressions
    !s.includes('\\u') &&
    !s.includes('px;') &&
    !s.includes('--tw') &&
    !/^[a-z]+( [a-z]+)+$/.test(s) &&     // skip space-separated lowercase event lists
    !s.startsWith('http') &&
    !s.startsWith('M ') &&
    !s.startsWith('m ') &&
    !/^[\d.,\sMmLlCcQqHhVvZzAa-]+$/.test(s) &&
    !/^[A-Z][a-z]+( [A-Z][a-z]+)+$/.test(s) || // tho keep these — could be names — re-include
    (s.split(' ').length >= 4)            // 4+ words is almost certainly content
  ) {
    // dedup heavy
    if (
      s.length >= 20 &&
      / /.test(s) &&
      !s.includes('${') &&
      !s.includes('px;') &&
      !s.includes('--tw') &&
      !s.startsWith('http') &&
      !s.startsWith('M ') &&
      !s.startsWith('m ') &&
      !/^[\d.,\sMmLlCcQqHhVvZzAa-]+$/.test(s) &&
      s.split(' ').length >= 3 &&
      /[A-Z]/.test(s)
    ) {
      strings.push(s);
    }
  }
}
const uniq = [...new Set(strings)];
fs.writeFileSync('strings.txt', uniq.join('\n'));
console.log('Total filtered strings:', uniq.length);
