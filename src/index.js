module.exports = function zeros(expression) {
      var arrExpression = expression.split('*');
      var result = 1;
      var zeros = 0;
      var countEven = 0;
      for (var i = 0; i < arrExpression.length; i++) {
        var str = arrExpression[i];
        var factorialDobleIndex = str.indexOf("!!");
//this code for counting !Factorial
        if (factorialDobleIndex == -1 ) {
          var factorialIndex = str.indexOf("!");
          var number = +arrExpression[i].slice(0, factorialIndex);
          var factorial = 1;
          var count = 0;
          for (var j = 1; j < number; j++) {
           if (((j + 1) % 5 === 0) && ((j + 1) % 25 === 0)) {
              count = count + 2;
            }
            else if ((j + 1) % 5 === 0) {
              count = count + 1;
            }
            factorial = "" + (factorial * (j + 1));
          }
        }
//this code for counting !!Double Factorial
        else {
          var number = +arrExpression[i].slice(0, factorialDobleIndex);
          var factorial = 1;
          var count = 0; 
//for EVEN
          if (number % 2 === 0) {
            countEven = 1;
            for (var j = 2; j < number; ) {
              if ((j + 2) % 10 === 0 ) {
                count = count + 1;
              }
            factorial = "" + (factorial * (j + 2));
            j = j + 2;
            }
          }
//for ODD
          else {
            for (var j = 1; j < number; ) {
              if (((j + 2) % 5 === 0) && ((j + 2) % 10 !== 0) && (countEven === 1) && ((j + 2) % 25 === 0)) {
                count = count + 2;
                countEven = 0;
              }
              else if (((j + 2) % 5 === 0) && ((j + 2) % 10 !== 0) && (countEven === 1)) {
                count = count + 1;
                countEven = 0;
              }
            factorial = "" + (factorial * (j + 2));
            j = j + 2;
            }
          }
        }
        result = "" + (result * factorial);
        zeros = zeros + count;
      }
      return zeros;
}
