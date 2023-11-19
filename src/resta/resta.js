function resta(num1, num2) {
    if (num1>100 || num2>100) {
        return "supera el rango";
    }

    if (num1<0 || num2<0 ) {
        return "Los numeros no son positivos";
    }

    
    return num1 - num2;
    
  }
  
  module.exports = resta;

