//Grading system
// let marks = input(`Enter the marks you scored : `);

// const ps = require("prompt-sync");
// const prompt = ps({sigint : true}) sigint = signal interrupt
const prompt = require("prompt-sync")();

let marks = prompt("Enter marks for student : ");
marks !== 0;
// | Grading boundaries

function grade(marks) {if ( marks <= 100 && marks > 79) {
    console.log('A')
} else if (marks < 80 && marks > 59){
    console.log('B')
}else if (marks >48 && marks <60){
    console.log('C')    
} else if (marks >39 && marks < 50){
    console.log('D')
} else if (marks > 0 && marks <41){
    console.log('E')
} else {
    console.log(`Please input valid marks!`)
}}

grade(marks);


