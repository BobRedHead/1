function sumFibonacci(n) {
    if (n < 0 || typeof n !== 'number') {
      return 0;
    }
  
    let a = 0;
    let b = 1;
    let sum = 0;
  
    for (let i = 0; i < n; i++) {
      sum += a;
      [a, b] = [b, a + b];
    }
  
    return sum;
  }
  console.log(sumFibonacci(10)); 
  console.log(sumFibonacci(1)); // 0 (только первое число Фибоначчи)
  console.log(sumFibonacci(2)); // 1 (0 + 1)
  console.log(sumFibonacci(3)); // 2 (0 + 1 + 1)
  console.log(sumFibonacci(4)); // 4 (0 + 1 + 1 + 2)
  console.log(sumFibonacci(5)); // 7 (0 + 1 + 1 + 2 + 3)
  console.log(sumFibonacci(-1)); // 0
  console.log(sumFibonacci('abc')); // 0
  