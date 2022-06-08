// how to group data.

// array literal
var vehicles = ['car', 'lorry', 'bus', 'lambo'];
console.log(vehicles);

var empty = [];
console.log(empty);

var myExpressions = ["Halleluyah", 5+6, 40, true];
console.log(myExpressions);
console.log(myExpressions[0]);
console.log(myExpressions[1]);
console.log(myExpressions[2]);
console.log(myExpressions[3]);

// object literal
myObject = {
    name:{
        firstname: "Oluwanifemi",
        surname: "Oyewole"
    },
    expertise: "Software design and development",
    language: ["Python", "JavaScript", "Java", "C++"],
    isRetired: false,
    favouriteWord: "Halleluyah"
}

console.log(myObject.name);
console.log(myObject.name.firstname);
console.log(myObject.name.surname);
console.log(myObject.expertise);
console.log(myObject.isRetired);
console.log(myObject.favouriteWord);

// the value of any property can be modified
myObject.favouriteWord = "Gloryyy";
console.log(myObject.favouriteWord);
// adding a new property
myObject.Religion = "Christ-like";
console.log(myObject.Religion);
// delete operation
delete myObject.favouriteWord;
console.log(myObject);

console.log('isRetired' in myObject);
