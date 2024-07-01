//Grading system
// let marks = input(`Enter the marks you scored : `);
let mark = prompt(`Enter marks for student :`);
            mark = parseFloat(mark);

// | Grading boundaries
function grade(marks) {if ( marks <= 100 && marks > 79) {
    console.log('A')
} if (marks <80 && marks > 59){
    console.log('B')
}else if (marks >48 && marks <60){
    console.log('C')    
} else if (marks >39 && marks < 50){
    console.log('D')
} else if (marks > 0 && marks <41){
    console.log('E')
}else {
    console.log(`Please input valid marks!`)
}}
grade(70)

