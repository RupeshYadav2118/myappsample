
// consecutive numbers

let numbers_array = [0,0,1,1,0,1,1,1,0,1,0,1]
let count=0;
let store_count=0;
for (let value in numbers_array) {
if(numbers_array[value]==1){
    count++;
}
    else if(numbers_array[value]==0){
    if(store_count<count){
        store_count=count;
        count=0;
    }
    
    }
}
console.log("consecutive 1's");
console.log(store_count);

