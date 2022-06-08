// Carrying out instructions repetitively


// The FOR loop
for(var i = 0; i < 11; i++){
    console.log(i);
}
console.log();


for(var i = 0; i < 20; i++){
    console.log(i);
    if(i == 15){
        break;
    }
}
console.log();

for(var i = 0; i < 20; i++){
    if (!(i == 15)){
        console.log(i);
    }
    else{
        continue;
    }
}
console.log();

// WHILE loop
var n = 0;
while (n != 5) {
    n = Math.floor(Math.random() * 10);
    console.log(n);
}
console.log();

// The DO-WHILE loop
var x = 0;
do{
    x += 1;
    console.log(x);
}while(x < 10)
console.log();

var readlineSync = require('readline-sync');
var answer;
do {
    answer = readlineSync.question("Type 'exit' to quit the loop. ")
} while (answer != "exit");
console.log();