function TreeConstructor(strArr) { 

    // code goes here
    let treeParents = {};
    let treeChildren = {};
  
    for(let i = 0; i < strArr.length; i++)
    {
      let pair = strArr[i].replace(/[()]/g,"").split(",");
      let child = pair[0];
      let parent = pair[1];
  
      if(treeParents[parent]) treeParents[parent].push(child);
  
      else treeParents[parent] = [child];
  
      if(treeParents[parent].length > 2) return false;
  
      if(treeChildren[child]) return false;
  
      else treeChildren[child] = parent;
    }
  
    return true; 
  
  }
     
  // keep this function call here 
  console.log(TreeConstructor(readline()));