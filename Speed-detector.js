// speed of car

const prompt = require("prompt-sync")();

// input Car Speed
let carSpeed = prompt(`Car input as recorded in km/h: `);

// get number of demerit points
function getPoints() {if (carSpeed <= 70 && carSpeed > 0) {
    console.log(`Points = 0`)
} else { 
    const demeritPoints = ((carSpeed - 70)/ 5);
    return demeritPoints;
}
}
getPoints(carSpeed);

function penalty() {if (demeritPoints < 12) { 
        console.log("Ok.")
} else {
        console.log(`License suspended!`);
        return 
}
}
penalty(demeritPoints);








