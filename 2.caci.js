const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a / b : 'Error: Division by zero')
  };
  
  function* calculatorGenerator(a, b) {
    yield `Addition: ${calculator.add(a, b)}`;
    yield `Subtraction: ${calculator.subtract(a, b)}`;
    yield `Multiplication: ${calculator.multiply(a, b)}`;
    yield `Division: ${calculator.divide(a, b)}`;
  }
  
  const num1 = 10, num2 = 5;
  const calcGen = calculatorGenerator(num1, num2);
  
  console.log(calcGen.next().value);
  console.log(calcGen.next().value);
  console.log(calcGen.next().value);
  console.log(calcGen.next().value);
  





