export function encriptarFuncion(text, columnas) {
    const numRows = Math.ceil(text.length / columnas);
    let result = "";
  
    for (let col = 0; col < columnas; col++) {
      for (let row = 0; row < numRows; row++) {
        const index = row * columnas + col;
        if (index < text.length) {
          result += text[index];
        }
      }
    }
  
    return result;
  }
  
  export function desencriptarFuncion(text, columnas) {
    const numRows = Math.ceil(text.length / columnas);
    let result = "";
  
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < columnas; col++) {
        const index = col * numRows + row;
        if (index < text.length) {
          result += text[index];
        }
      }
    }
  
    return result;
  }
  