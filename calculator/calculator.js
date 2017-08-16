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
    return this;
  };

  Calculator.prototype.subtract = function (selector, targetOutput) {
    selector.addEventListener('click', function () {
      targetOutput.innerHTML = 'subtract';
    });
    return this;
  };

  Calculator.prototype.multiply = function (selector, targetOutput) {
    selector.addEventListener('click', function () {
      targetOutput.innerHTML = 'multiply';
    });
    return this;
  };

  Calculator.prototype.divide = function (selector, targetOutput) {
    selector.addEventListener('click', function () {
      targetOutput.innerHTML = 'divide';
    });
    return this;
  };

  Calculator.prototype.clear = function (selector, targetOutput) {
    selector.addEventListener('click', function () {
      targetOutput.innerHTML = 0;
    });
    return this;
  };

  Calculator.prototype.equals = function (selector, targetOutput) {
    selector.addEventListener('click', function () {
      targetOutput.innerHTML = 'equals';
    });
    return this;
  };

  Calculator.prototype.createNumberBtns = function (arrNumberBtn) {
    for (var i = 0; i < 10; i++) {
      arrNumberBtn.push(document.getElementById('button-' + i));
    }
  };

  Calculator.prototype.printNumber = function (selector, targetOutput) {
    console.log(this.value);
    selector.addEventListener('click', function () {
      selector.innerHTML += this.value;
    });
    return this;
  };

  Calculator.init = function () {};

  Calculator.init.prototype = Calculator.prototype;

  global.Calculator = global.$C = Calculator;
})(window);
