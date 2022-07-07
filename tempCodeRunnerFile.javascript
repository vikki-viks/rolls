// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page


function validParentheses(parens = '') {
  if (parens.substring(0,1) === ')') {
    return false
  }
  if (parens
    .split('')
    .every((el) => el === '(' )) {
      return false
    }
  const array = parens.split.filter((el) => el === '('); 
    console.log(array.length);
  }
  
  
validParentheses('((((');
