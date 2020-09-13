let arr=[1,2,[3,3,[5],{val:5},[6,7,8,[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[9,[[[[[[[99,{val:120}]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
/*
let flatArray=arr.flat(Infinity);
console.log(flatArray);
let array=[];
for(let i in flatArray){
    if(flatArray[i]=={}){
        array = flatArray.map(a => a.val);
    }
    else{
        array.push(flatArray[i]);
    }

}
 console.log(array);*/

// function flatArray(arr) {
//     return arr.reduce(function (flatten, toFlatten) {
//       return flatten.concat(Array.isArray(toFlatten) ? flatArray(toFlatten) : toFlatten);
//     }, []);
//   }
//   let newarray=flatArray(arr);
//   let result=[]; 
//   newarray.forEach(element => { if(typeof(element)== 'number'){
//       result.push(element)
//   }
//   else{
//       result.push(element.val)
//   }
//   });
//   function removeobject(array){
//      
//     for(let i=0;i<array.length;i++){
//           if(typeof(array[i])=='number'){
//             result.push(array[i]);
//           }
//           else{
//               result.push(array[i].val)
//           }
//       }
//   }
//   let resultantArray=removeobject(newarray);
//   console.log(result)
