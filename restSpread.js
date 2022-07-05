

const filterByType=(type,...vals)=>{
    return  vals.filter(v=>typeof v===type);
  };
  
  
  const filterOutOdds=(...args)=>args.filter(v=>v%2===0); ///ans
  
  
  const filterOutEvens=(...args)=>args.filter(v=>v%2!==0);
  
  const filterLongWord=(...args)=>args.filter(v=>v.length===7);
  
  
  const findMin=(...nums)=>Math.min(...nums); //ans
  
  
  
  
  
  
  const mergeObjects=(obj1,obj2)=>({...obj1, ...obj2});//ans
  
  const doubleAndReturnArgs=(arr,...args)=>[...arr, ...args.map(v=>v*2)];
  
  const removeRandom=items=>{
    let idx=Math.floor(Math.random()*items.length);
    return [...items.slice(0,idx)];
  }
  
  
  const extend=(arr1,arr2)=>[...arr1,...arr2]; 
  
  const addKeyVal=(obj,key,val)=>[{...obj,key,val}];
  
  const newKeyVal=(obj,key,val)=>{
    let newObj={...obj};
    newObj[key]=val;
    return newObj;  
  }
          
  
  const combine=(obj1,obj2)=>{
    let newObj={...obj1,...obj2};
    return newObj;
  }
  
  
  const update=(obj,key,val)=>{
    return {...obj,[key]:val};
  };
  
  