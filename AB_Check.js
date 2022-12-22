function ABCheck(str) { 

    // code goes here  
    for(let i = 0; i < str.length-4; i++)
    {
      if(str[i].match(/[abAB]/))
        if(str[i+4].match(/[abAB]/)) return true;
    }
  
    return false; 
  
  }
  // keep this function call here 
  console.log(ABCheck(readline()));