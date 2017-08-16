(function (global) {
  'use strict';

  var Calculator = function () {
    return new Calculator.init();
  };

  Calculator.prototype = {};

  var operators = ['+', '-', '*', '/'];

  Calculator.prototype.add = function (selector, targetOutput) {
    selector.addEventListener('click', function () {
      targetOutput.innerHTML = 'add';
    });
  };

  Calculator.prototype.subtract = function (selector, targetOutput) {
    selector.addEventListener('click', function () {
      targetOutput.innerHTML = 'subtract';
    });
  };

  Calculator.prototype.multiply = function (selector, targetOutput) {
    selector.addEventListener('click', function () {
      targetOutput.innerHTML = 'multiply';
    });
  };

  Calculator.prototype.divide = function (selector, targetOutput) {
    selector.addEventListener('click', function () {
      targetOutput.innerHTML = 'divide';
    });
  };

  Calculator.prototype.clear = function (selector, targetOutput) {
    selector.addEventListener('click', function () {
      targetOutput.innerHTML = 0;
    });
  };

  Calculator.prototype.equals = function (selector, targetOutput) {
    selector.addEventListener('click', function () {
      targetOutput.innerHTML = 'equals';
    });
  };

  Calculator.prototype.printNumber = function (selector, targetOutput) {
    console.log(this.value);
    selector.addEventListener('click', function () {
      selector.innerHTML += this.value;
    });
  };

  Calculator.init = function () {

  };

  Calculator.init.prototype = Calculator.prototype;

  global.Calculator = global.$C = Calculator;
})(window);
