
export const isNumberEven = (i) => {
  // i will be an integer.
  // Return true if it's even, and false if it isn't.
  return i % 2 === 0;
};

export const getFileExtension = (str) => {
  // str will be a string, but it may not have a file extension.
  // Return the file extension (with no period) if it has one, otherwise false
  let tab = str.split('.');
  if(tab.length===1) return false;
  return tab[tab.length-1];
};

export const longestString = (arr) => {
  // arr will be an array.
  // Return the longest string in the array
  let strMax = '';
  let i;
  for(i = 0; i < arr.length; i++)
  {
    if(typeof arr[i]==='string' && arr[i].length>strMax.length)
    {
      strMax = arr[i];
    }
  }
  return strMax;
};

export const reverseString = (str) => {
  // str will be an string
  // Return a new string who's characters are in the opposite order to str's.
  let arr = str.split('');
  arr.reverse();
  return arr.join('');
};

export const isPalindrome = (str) => {
  // str will be an string
  // Return true if it is a palindrome and false otherwise.
  // It should be case insensitive and not consider space or punctuation.
  let strUpper = str.toUpperCase();
  let arr = strUpper.split('');
  let i;
  for(i = 0; i < arr.length/2; i++)
  {
    if(arr[i] != arr[arr.length-1-i]) return false;
  }
  return true;
};

export const nestedSum = (arr) => {
  // arr will be an array, containing integers, strings and/or arrays like itself
  // Return the sum all the numbers you find, anywhere in the nest of arrays.
  let i;
  let sum = 0;
  for(i = 0; i < arr.length; i++)
  {
    if(Array.isArray(arr[i])) sum+=nestedSum(arr[i]);
    if(typeof arr[i]==='number') sum+=arr[i];
  }
  return sum;
};
// git add -u && git commit -m "premier commit"