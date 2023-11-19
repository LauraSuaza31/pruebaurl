function multi(num1, num2) {
    const producto = num1*num2;

    if (producto == 1250) {
        return producto;
    }

    if (producto==0) {
        return "datos invalidos";
    }

    if (producto%2==1) {
        return "datos incorrectos";
    }

    
    return producto;
    
  }
  
  module.exports = multi;

