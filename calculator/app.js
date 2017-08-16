var calculator = $C();

var btnAdd = document.getElementById('button-+');
var btnSubtract = document.getElementById('button--');
var btnMultiply = document.getElementById('button-*');
var btnDivide = document.getElementById('button-/');
var btnCancel = document.getElementById('button-C');
var btnEquals = document.getElementById('button-=');
var numBtns = document.querySelectorAll('input[type="button"]');
var calcOutput = document.querySelector('#calc-output');

calculator.add(btnAdd, calcOutput);
calculator.subtract(btnSubtract, calcOutput);
calculator.multiply(btnMultiply, calcOutput);
calculator.divide(btnDivide, calcOutput);
calculator.equals(btnEquals, calcOutput);
calculator.clear(btnCancel, calcOutput);
