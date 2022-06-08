// grouping data and functionality (or methods)

// user-created object blueprint
function Person(firstName, lastName, weight, height){
    // below are properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.weight = weight;
    this.height = height;
    // below is a method
    this.getFullname = function() {
        return this.firstName + " " + this.lastName;
    }
}
// instantiating an object
var person1 = new Person("Nifemi", "Oyewole", 1.72, 80);
var person2 = new Person("Eze", "Obi", 1.11, 78);
console.log(person1.firstName);
console.log(person1.getFullname());
console.log(person2.firstName);
console.log(person2.getFullname());

// differentiating btw constructor and prortotype
// 
// 
// 
// 
// 

// built-in blueprints
// Math
console.log(Math.E);
console.log(Math.PI);
console.log(Math.cos(45));
console.log(Math.abs(30));
console.log(Math.random());
console.log(Math.max(10,36,1));
console.log(Math.min(100,36,1));

// Date
var today = new Date();
console.log(today);
var birthday = new Date(2004, 3, 14);
console.log(birthday);

function calculateAge(birthday) {
    var today = new Date();
    var difference = today - birthday;
    var yearEquivalent = new Date(difference).getFullYear();
    return yearEquivalent - 2004;
}
console.log(calculateAge(birthday));

// RegExp
var re = new RegExp('xyz'); //'xyz' is the pattern to be matched.
var re = /xyz/;
var searchString = "Locate xyz pattern in this text. The xyz could be in XYZ location";
//Simply check if pattern is in searchString using test() method.
console.log(re.test(searchString)); //Should return true as xyz pattern is present in searchString.
//Find index position using exec() method
console.log(re.exec(searchString)); //Returns an array containing pattern, index and input
console.log(searchString.search(re)); //Returns index position.

var re = new RegExp('xyz','gi'); //'xyz' is the pattern to be matched; g and i options set.
var re = /xyz/gi;
var result;
while((result = re.exec(searchString))!= null){ //loop until no more match
    //display the index found and the string
    console.log("Index position " + result.index + " contains " + result[0]);
}


// JSON String - JavaScript Object Notation
var personJSON1 =' { \
    "firstName":"Nifemi", \
    "lastName": "Oyewole", \
    "complexion": "brown", \
    "heightInMeters": 1.7,\
    "programmer" : true, \
    "olympicMedal" : null, \
    "degrees" : ["BSc", "MSc", "PhD"] \
}'

var personJSON2 =' { \
    "names":{ \
        "firstName":"Nifemi", \
        "lastName": "Oyewole" \
    }, \
    "complexion": "brown", \
    "heightInMeters": 1.7, \
    "programmer" : true, \
    "olympicMedal" : null, \
    "degrees" : ["BSc", "MSc", "PhD"] \
} '

// JSON Object
