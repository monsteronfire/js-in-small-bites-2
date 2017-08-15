(function (global) {
  'use strict';

  var Calculator = function () {
    return new Calculator.init();
  };

  Calculator.prototype = {};

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

  Calculator.init = function () {

  };

  Calculator.init.prototype = Calculator.prototype;

  global.Calculator = global.$C = Calculator;
})(window);
