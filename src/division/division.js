function division(num1, num2) {

    if (num2 == 0) {
        return "El divisor debe de ser mayor a 0";
    }

    const cociente = num1 / num2;
    if (cociente % 1 != 0) {
        return "El cociente es decimal";
    }

    if (cociente%2==0) {
        return true;
    }

    
    return cociente;
    
  }

  module.exports = division;
