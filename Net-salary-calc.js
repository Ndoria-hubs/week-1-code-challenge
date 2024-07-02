// | Net salary Calculator |

// basic salary Input ^
// benefits Input ^
// taxable pay = bs + benefits ^
// get taxes incurred(exemption of pension) ^
// payee (gross tax)= taxes incurred - relief ^
// gross pay = taxablepay - gross tax(payee) ^
// get deductions(nhif and nssf) ^
// net salary = gross salary - deductions ^

const prompt = require("prompt-sync")();

// // // basic salary and benefits (total taxable income)

// //input basic salary
let basicSalary = parseFloat(prompt(`Fill in your basicSalary below:`)) 
basicSalary === Number;

// // input allowances 
let benefits = parseFloat(prompt(`Do you have any allowances, if yes, fill in below:`));
benefits === Number;

const taxablePay = (basicSalary + benefits);

console.log(`Total taxable income = ${taxablePay}`)


// P.A.Y.E(tax) (based off taxable income)
function getPAYE(taxablePay) {if (taxablePay > 0 && taxablePay < 24001) {
    return taxablePay * 0.10
} else if(taxablePay > 24000 && taxablePay < 32334) {
    return taxablePay * 0.25
} else if(taxablePay > 32333 && taxablePay < 500001) {
    return taxablePay * 0.30
} else if (taxablePay >= 500000 && taxablePay < 800001) {
    return taxablePay * 0.325 
} else if (taxablePay >= 800000) {
    return taxablePay * 0.35
} else {
    return `Please input valid value!`
}}
const payee = getPAYE(taxablePay);
console.log(`Taxes to be deducted = ${payee}`)


const isDisabled = prompt('I have a disability?(true or false) : ')
typeof isDisabled === Boolean;
exemption = (isDisabled) ? 15000 : 0 ;
console.log(`You are exempted ${exemption} of tax`);

// gross Tax
totalTaxes = payee - exemption
console.log(`Total taxes therefore amount to ${totalTaxes}`);

// gross Pay
grossPay = taxablePay - totalTaxes;
console.log(`Pay before deductions: ${grossPay}`);

// Deductions(NHIF and NSSF)
// NHIF
function getNhifDeductions() {if (taxablePay > 0 && taxablePay < 6000) {
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
getNhifDeductions(taxablePay);
const nhifRates = getNhifDeductions();
console.log(`NHIF allocation: ${nhifRates}`)

//  NSSF  - 6% of pensionablepay
/**tier I and II 
 * tier I = upto 7000
 * tier II = 7001 - 36000
*/
function getNssfContributions(totalTaxes) {
    if( totalTaxes > 0 && totalTaxes < 7001) {
        console.log(`NSSF Tier I`)
        return (0.06 * totalTaxes);
    } else if (totalTaxes > 7000 && totalTaxes < 36001) {
        console.log(`NSSF Tier II`)
        return (0.06 * totalTaxes);
    } else {
        console.log(`No NSSF contributions`)
        return 0;
    }
}

const nssfContributions = getNssfContributions(totalTaxes);
console.log(`NSSF Contributions: ${nssfContributions}`)

//total deductions
totalDeductions = nhifRates + nssfContributions;


// Net salary (Gross salary - Deductions)
netSalary = grossPay - totalDeductions;
console.log(`Monthly Net Salary :${netSalary}`);
