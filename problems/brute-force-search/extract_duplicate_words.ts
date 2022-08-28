function extractDuplicateWords(str: string) {
  let _str = str.toLowerCase(),
    i = 0;
  while (i < _str.length) {
    if (str.lastIndexOf(_str[i]) !== i) {
      const regex = new RegExp(`${_str[i]}`, 'gi');
      _str = _str.replace(regex, '');
      continue;
    }
    i++;
  }
  return str;
}

console.log(extractDuplicateWords('abcabcdefabc')); // "def"
console.log(extractDuplicateWords('abxdeydeabz')); // "xyz"
