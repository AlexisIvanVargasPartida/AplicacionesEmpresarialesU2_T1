function LetterCapitalize(str) { 
  

    return str.replace(/\b[a-z]/gi, function(char) { 
      return char.toUpperCase();
    });
           
  }
     
  LetterCapitalize("hola mundo");  