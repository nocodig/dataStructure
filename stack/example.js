const Stack = require('./index');


/**
 * 10进制 -》 2进制
 */
function divideBy2(decNum) {
  const stack = new Stack();
  let rem;
  let binaryString = '';

  while(decNum > 0) {
    rem = Math.floor(decNum % 2);
    stack.push(rem);

    decNum = Math.floor(decNum / 2);
  }

  while(!stack.isEmpty()) {
    binaryString += stack.pop()
  }

  return binaryString;
}

console.log(divideBy2(2))