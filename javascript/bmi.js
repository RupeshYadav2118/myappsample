// array for person's namme weight and height

let person = [{
        name: "Mark",
        mass: 70,
        height: 1.5
    },
    {
        name: "John",
        mass: 60,
        height: 1.2
    }
];

//method to calculate person's bmi
 
let calculate_bmi = () => {
    let bmi_array = [];
    for (let i in person) {
        bmi_array.push(person[i].mass / (person[i].height * person[i].height));
        //console.log("inner function"+person[i].mass);
    }
    return bmi_array;
}
let calculated_bmi = calculate_bmi();

//display everyone's bmi
let display_bmi = (person) => {
    console.log("there bmi's are ");
    for (let i in calculated_bmi) {
        console.log(person[i].name + " bmi is " + calculated_bmi[i]);
    }
}
display_bmi(person);

//calculate and display highest bmi 
let highgest_bmi = () => {
    let bmi = calculated_bmi[0];
    let index;
    for (let i in calculated_bmi) {
        if (calculated_bmi[i] >= bmi) {
            bmi = calculated_bmi[i];
            index = i;
        }
    }
    console.log(person[index].name + " has highest bmi " + bmi);
}
highgest_bmi();
/*
//comparing mark's and john's bmi
var compare_bmi = () => {
    let result = calculated_bmi[index_no1] > calculated_bmi[index_no2] ? true : false;
    return result;
}
console.log("is bmi of " + person[index_no1].name + " higher then bmi of " + person[index_no2].name + " : " + compare_bmi());
*/