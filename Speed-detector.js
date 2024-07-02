// speed of car

const prompt = require("prompt-sync")();

// input Car Speed
let carSpeed = prompt(`Car input as recorded in km/h: `);
let demerit = 0;

// const sumArr = numbersArr.reduce((acc, element) => {
//     console.log(acc);
//     console.log(element);
//     return acc + element;
// }, 70)

if (carSpeed <= 70 && carSpeed > 0) {
    console.log("Ok.")
} else if ( carSpeed > 70) {
        console.log(`demerit incurred`)
        return `demerit`
} else {
    null;
}

