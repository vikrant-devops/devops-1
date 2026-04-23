function calculate(op) {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let result;

  if (op === '+') result = a + b;
  if (op === '-') result = a - b;
  if (op === '*') result = a * b;
  if (op === '/') result = a / b;

  document.getElementById("result").innerText = "Result: " + result;
}