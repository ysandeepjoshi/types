console.log("Hello, TypeScript");
let myVar;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 12;
console.log(`${myVar} = ${typeof myVar}`);
myVar = "Hello";
console.log(`${myVar} = ${typeof myVar}`);
myVar = true;
console.log(`${myVar} = ${typeof myVar}`);
function calculateTax(amount) {
    return amount * 1.2;
}
let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half amount in tax: ${halfShare}`);
