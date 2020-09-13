
//finding one repeated number in an array

let array = [0,1,2,3,4,5,6,7,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let index=0;
for (let value in array) {
    index++;
if(array[value]==array[index]){
    console.log("repeated value");
console.log(array[value]);
break;
}
}
