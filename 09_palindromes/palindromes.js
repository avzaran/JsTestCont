const palindromes = function (str) {
return str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, '') == str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, '').split('').reverse().join('');
};

// уже почти пять утра
module.exports = palindromes;
