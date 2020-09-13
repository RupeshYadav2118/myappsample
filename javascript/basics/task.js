// object containing person,s details
let personInfo = {
    name: "abc",
    age: 20,
    gender: "male",
    category: "general",
    mobile_no: 1234567890,
    profession: "student",
    college: "def",
    city: "noida",
    locality: "sector 1",
    country: "india",
    talents: []
};

//adding talents in talent array in person Info
let addTalent = () => {
    let talent_types = ["football", "cricket", "running", "swimming", "jumping", "tracking", "bollyball", "basketball", "jhgfvj", "hjhf", "jgjsg", "klinm", "laifh", "bckosow", "grksodkjn"]
    let talent_value = talent_types[Math.floor(Math.random() * talent_types.length)];
    personInfo.talents.push(talent_value);
    talent_count = 1;
    while (talent_count != 9) {
        value = talent_types[Math.floor(Math.random() * talent_types.length)];
        let repeat_counter = 0;
        for (let values in personInfo.talents.length) {
            if (personInfo.talents[values] != talent_value) {
                repeat_counter++;
            }
        }
        if (repeat_counter = personInfo.talents.length) {
            personInfo.talents.push(talent_value);
            talent_count++;
        }
        // talent_count++;
    }
}

//printing keys of personinfo
let print_keys = () => {
    let keynames = Object.keys(personInfo);
    console.log(keynames);
}


//printing values of perso ninfo
let printValues = () => {
    for (let values in personInfo) {
        console.log(personInfo[values]);
    }
}


//looping and printing talent array values
let talent_array = () => {
    let talent_array = personInfo.talents;
    //using for-in
    console.log("using for-in-----------")
    for (let values in talent_array) {
        console.log(talent_array[values]);
    }
    //using for-of
    console.log("using for-of-----------");
    for (let values of talent_array) {
        console.log(values);
    }

    //using map
    console.log("using map----------")
    console.log(talent_array.map(word => word))

    //using filter
    console.log("using filter----------")
    console.log(talent_array.filter(word => word.length > 0))

}


// To check a particular talent in talent array
function check_particular_talent(talent) {
    // let talent_array = personInfo.talents;
    console.log(personInfo.talents.find(element => element == talent));

}


//removing talent from array
let remove_particular_element = (index_value) => {
    delete personInfo.talents[index_value];
}


//adding and removing a key value from object
function add_value(propertyname, propertyvalue) {
    personInfo[propertyname] = propertyvalue;
    console.log(personInfo);
}


//removing a value
function remove_value(key) {
    delete personInfo[key];
    console.log(personInfo);
}

//adding marks in array marks
// personInfo.marks = [];
// let addmarks = (value) => {

//     // for (let iterator = 0; iterator < 5; iterator++) {
//         personInfo.marks.push(value)
//     // }
//     console.log(personInfo);
// }
// addmarks(5);
// addmarks(58);
// addmarks(57);

let addMarks = () => {
    personInfo.marks = [];
    let marks_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 6, 4, 67, 345, 23]
    let value = marks_array[Math.floor(Math.random() * marks_array.length)];
    personInfo.marks.push(value);
    talent_count = 1;
    while (talent_count != 5) {
        value = marks_array[Math.floor(Math.random() * marks_array.length)];
        let counter = 0;
        for (let values in personInfo.marks.length) {
            if (personInfo.marks[values] != value) {
                counter++;
            }
        }
        if (counter != personInfo.marks.length) {
            personInfo.marks.push(value);

        }
        talent_count++;
    }
}

//calcuklate sum of marks
function sum_of_marks() {
    let sum_array = personInfo.marks;
    let sum = (sum, value) => sum + value;
    console.log("sum of your marks : " + sum_array.reduce(sum));
}


//creating friends object
let friend = {
    name: "rupesh",
    age: 21,
    gender: "male",
    category: "general",
    mobile_no: 63487974,
    profession: "working",
    college: "defhgf",
    city: "lucknow",
    locality: "sector 11",
    country: "india",
    talent: []
};

//merging personInfo and friend object
let mergeObjs = () => {
    let new_object = Object.assign(personInfo, friend);
    return new_object;
}
let resultant_object = mergeObjs();

let print_objs = () => {
    console.log(JSON.parse(JSON.stringify(resultant_object)));
}


let call_functions = () => {
    addTalent()
    printValues();
    print_keys();
    talent_array();
    check_particular_talent("cricket");
    remove_particular_element(4);                //give index valus as argument to be removed
    add_value("degree", "graduate");
    remove_value("college")
    addMarks();
    sum_of_marks();
    print_objs();
}
call_functions();