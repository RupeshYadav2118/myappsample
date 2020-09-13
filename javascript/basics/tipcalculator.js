let bill=[{name:"a",
amount:124},
{name:"b",
amount:48},
{name:"c",
amount:268}];
//calculate tip and total bill
let tip=[];
let totalbill=[];
function calculate_bill(){
    for(let i in bill){
      if(bill[i].amount<50){
          tip.push(bill[i.amount]*0.2);
          totalbill.push(bill[i].amount+(bill[i].amount*0.2));
      }
      else
      if(bill[i].amount>=50&&bill[i].amount<200){
        tip.push(bill[i].amount*0.15);
        totalbill.push(bill[i].amount+(bill[i].amount*0.15));
    }
    else      if(bill[i].amount>=200){
        tip.push(bill[i].amount*0.1);
        totalbill.push(bill[i].amount+(bill[i].amount*0.1));
    }
   }
}
calculate_bill();

//display tip and total bill with restaurants name
let disp=()=>{
    for(let i in bill){
        console.log("Restaurant Name : "+bill[i].name+" total bill : "+totalbill[i]+" tip : "+tip[i])
    }
}
disp();