// Net salary Calculator

const prompt = require("prompt-sync")();

// // basic salary and benefits (total taxable income)

// //input basic salary
let basicSalary = parseFloat(prompt(`Fill in your basicSalary below:`)) 
// // basicSalary === Number;

// // input allowances 
let benefits = parseFloat(prompt(`Do you have any allowances, if yes, fill in below:`));
// // benefits === Number;

// //taxable income
// function getSum(a, b) {
//     c = a + b
//     return c
// }

const taxablePay = basicSalary + benefits;
// const taxablePay = getSum(basicSalary, benefits);
// console.log(`Your total taxable income is ${taxablePay}`)


// P.A.Y.E(tax) (based off taxable income)
function getPAYE(taxablePay) {if (taxablePay > 0 && taxablePay < 24001) {
    console.log(taxablePay * 0.10)
} else if(taxablePay > 24000 && taxablePay < 32334) {
    console.log(taxablePay * 0.25)
} else if(taxablePay > 32333 && taxablePay < 500001) {
    console.log(taxablePay * 0.30)
} else if (taxablePay >= 500000 && taxablePay < 800001) {
    console.log(taxablePay * 0.325) 
} else if (taxablePay >= 800000) {
    console.log(taxablePay * 0.35)
} else {
    console.log(`Please input valid value!`)
}}
const payee = getPAYE(taxablePay);
console.log(`Your taxes amount to the ${payee}`)


// let relief;
// let disabled ;
// exemption = (disabled = true) ? 150000 : 0 ;
// const  = getPAYE - (relief + exemption);
 

// Deductions(NHIF and NSSF)
function NhifDeductions() {if (taxablePay > 0 && taxablePay < 6000) {
    return 150
} else if( taxablePay >= 6000 && taxablePay < 8000) {
    return 300;
} else if( taxablePay >= 8000 && taxablePay <12000) {
    return 400;
} else if(  taxablePay >= 12000 && taxablePay <15000 ) {
    return 500;
} else if(  taxablePay >= 15000 && taxablePay <20000 ) {
    return 600;
} else if(  taxablePay >= 20000 && taxablePay <25000 ) {
    return 750;
} else if(  taxablePay >= 25000 && taxablePay <30000 ) {
    return 850;
} else if(  taxablePay >= 30000 && taxablePay <35000 ) {
    return 900;
} else if(  taxablePay >= 35000 && taxablePay <40000 ) {
    return 950;
} else if(  taxablePay >= 40000 && taxablePay <45000 ) {
    return 1000;
} else if(  taxablePay >= 45000 && taxablePay <50000 ) {
    return 1100;
} else if(  taxablePay >= 50000 && taxablePay <60000 ) {
    return 1200;
} else if(  taxablePay >= 60000 && taxablePay <70000 ) {
    return 1300;
} else if(  taxablePay >= 70000 && taxablePay <80000 ) {
    return 1400;
} else if(  taxablePay >= 80000 && taxablePay <90000 ) {
    return 1500;
} else if(  taxablePay >= 90000 && taxablePay <100000 ) {
    return 1600;
} else if(  taxablePay >= 100000) {
    return 1700;
} else {
    return `Invalid Tax Bracket!`
}
}



// Gross Salary (Taxable Income - P.A.Y.E)



// Net salary (Gross salary - Deductions)