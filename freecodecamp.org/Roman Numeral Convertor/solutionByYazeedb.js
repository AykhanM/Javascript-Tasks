function convertToRoman(num) {
    const lookupTable = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let accumulator = '';
  
    for (const key in lookupTable) {
      const numberValue = lookupTable[key];
  
      while (numberValue <= num) {
        num -= numberValue;
        accumulator += key;
      }
    }
  
    return accumulator;
  }
  
  convertToRoman(36);

  // For video instruction https://youtu.be/g_ISxHcg-RM?si=oIWPHPk6sEgQSCmg