(function () {
  var Calculator = function () {
    return this;
  };

  var operators = ['+', '-', '*', '/'];

  Calculator.prototype.add = function (target) {
    console.log(this);
  };

  Calculator.prototype.subtract = function () {
    console.log(this);
  };

  Calculator.prototype.multiply = function () {
    console.log(this);
  };

  Calculator.prototype.divide = function () {
    console.log(this);
  };

  Calculator.prototype.clear = function (trigger, target) {
    trigger.addEventListener('click', function () {
      target.innerHTML = 0;
    });
  };

  Calculator.prototype.equals = function () {
    console.log(this);
  };

  Calculator.prototype.printNumber = function (trigger, target) {
    console.log(this.value);
    trigger.addEventListener('click', function () {
      trigger.innerHTML += this.value;
    });
  };

  Calculator.prototype.init = function () {
    var btnAdd = document.getElementById('button-+');
    var btnSubtract = document.getElementById('button--');
    var btnMultiply = document.getElementById('button-*');
    var btnDivide = document.getElementById('button-/');
    var btnCancel = document.getElementById('button-C');
    var numBtns = document.querySelectorAll('input[type="button"]');
    var calcOutput = document.querySelector('#calc-output');
  };

  var calculator = new Calculator();
  calculator.init();

})();
