console.log("Hello, TypeScript");
let myVar;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 12;
console.log(`${myVar} = ${typeof myVar}`);
myVar = "Hello";
console.log(`${myVar} = ${typeof myVar}`);
myVar = true;
console.log(`${myVar} = ${typeof myVar}`);
function calculateTax(amount, format) {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `${calcAmount.toFixed(2)}` : calcAmount;
}
let taxValue = calculateTax(0, false);
switch (typeof taxValue) {
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue.charAt(0)}`);
        break;
    default:
        if (taxValue === null) {
        }
        else {
            console.log(`${typeof taxValue}`);
            let value = taxValue;
            console.log(`Unexpected type for value: ${value}`);
        }
        break;
}
let newResult = calculateTax(200, false);
let myNumber = newResult;
console.log(`Number value: ${myNumber.toFixed(2)}`);
