// Carrying out basic operations

console.log(" + for addition");
console.log(" - for subtraction");
console.log(" * for multiplication");
console.log(" / for division");
console.log(" ** for exponentiation");
console.log(" ++ for increment");
console.log(" -- for decrement");
console.log(" % for modulos");

a = 10;
b = 20;
d = 30;
c = a + b;
console.log(c);
console.log(a*b);
console.log(a/b);
console.log(a**b);
a++;
console.log(a);
b--;
console.log(b);

// String operations
firstname = "Nifemi";
lastname = "Oyewole";
fullname = firstname + " " + lastname; //Concatenation
console.log(fullname);

// Comparison operations
a = 10;
a < 11; //returns true
console.log(a<11); //displays true 

var test = a > 20;
console.log(test);
a >= 10;
console.log(a >= 10);
a <= 20;
console.log(a <= 20);
a == 10;
console.log(a == 10);
a === "10";
console.log(a === 10);

// Logical operators
console.log("&& represents 'and'");
console.log("|| represents 'or'");
console.log("! represents 'not'");

// Ternary operations (conditionals)
var age = 22;
var adult = (age > 20)? "Yes":"No";
console.log(adult);

// Bitwise operations
frm = 7^2; //also |, &, >>, << 
console.log(frm);

// Typeof operator
console.log(typeof(10));
console.log(typeof("10"));
console.log(typeof(100.2));
console.log(typeof(true));
console.log(typeof(null));