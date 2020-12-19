module.exports = function check(str, bracketsConfig) {
  const arr = []
  let strcopy = str;

  for (let el of bracketsConfig) {
    if (parseInt(str)) {
      arr.push(`(${el[0]}${el[1]})`);
    } else {
      arr.push('(\\' + el[0] + '\\' + el[1] + ')');
    }
  }

  const pattern = arr.join('|');

  const re = new RegExp(pattern, 'g');
  
  const lenarr = [-1];
  lenarr.push(str.length);
  let i = 1;
  let curlen = 0;

 while (lenarr[i-1] !== lenarr[i]) {
    strcopy = strcopy.replace(re, '');
    curlen = strcopy.length
    lenarr.push(curlen)
    i++;
  }

  return !strcopy
}