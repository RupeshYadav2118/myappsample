//Array of persons and their score
let person = [{
    name: "John",
    match1: 89,
    match2: 120,
    match3: 103
  },
  {
    name: "Mike",
    match1: 116,
    match2: 94,
    match3: 123
  }
]

//calculate average score 
function avgscore() {
  let avgscore = [];
  for (let i in person) {
    avgscore.push((person[i].match1 + person[i].match2 + person[i].match3) / 3);
  }
  console.log(avgscore);
  return avgscore;
}
let arr = avgscore();
let start = arr[0];
let win = 0;
let flag = 0;

//finding highest score to find winner looser or match draw
let highscore = () => {
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > start) {
      start = arr[i];
      flag += 1;
      win = i;
    } else
    if (arr[i] == start) {
      flag = -1;
      win = i;
      break;
    }
  }
}
highscore();

//display winner or match draw
var displaywinner = () => {
  if (flag == -1) {
    console.log("match draw");
  } else if (flag == 0) {
    console.log(" winner is : " + person[win].name + " with average score : " + arr[win]);
  } else {
    console.log(" winner is : " + person[win].name + " with average score : " + arr[win]);
  }
}
displaywinner();
//calculation operations after  adding  Marry 
let marry = {
  name: "Marry",
  match1: 89,
  match2: 70,
  match3: 199
}
 start = arr[0];
 win = 0;
 flag = 0;
person.push(marry);

avgscore();

highscore();
displaywinner();