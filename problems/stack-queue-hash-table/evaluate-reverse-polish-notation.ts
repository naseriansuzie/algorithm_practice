/**
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
Note that division between two integers should truncate toward zero.
It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

* Constraints:
  - 1 <= tokens.length <= 10**4
  - tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
 */

function evalRPN(tokens: string[]): number {
  const stack: (number | string)[] = [];

  tokens.forEach((token) => {
    if (isNaN(Number(token))) {
      const prevToken = Number(stack.pop());
      const beforePrevToken = Number(stack.pop());
      if (token === '+') {
        stack.push(prevToken + beforePrevToken);
      } else if (token === '-') {
        stack.push(beforePrevToken - prevToken);
      } else if (token === '*') {
        stack.push(prevToken * beforePrevToken);
      } else if (token === '/') {
        stack.push(Math.trunc(beforePrevToken / prevToken));
      }
    } else {
      stack.push(token);
    }
  });
  return Number(stack[0]);
}

console.log(evalRPN(['2', '1', '+', '3', '*'])); // 9
console.log(evalRPN(['4', '13', '5', '/', '+'])); // 6
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])); // 22
