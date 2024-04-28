console.log("Hello, TypeScript");
let myVar;
console.log(`${myVar} = ${typeof myVar}`);
myVar = 12;
console.log(`${myVar} = ${typeof myVar}`);
myVar = "Hello";
console.log(`${myVar} = ${typeof myVar}`);
myVar = true;
console.log(`${myVar} = ${typeof myVar}`);

function calculateTax(amount:number,format:boolean):string |  number {
    const calcAmount = amount * 1.2;
    return format? `${calcAmount.toFixed(2)}`: calcAmount;
}

let taxNumber = calculateTax(100,false) as number;
let taxString = calculateTax(100,true) as string;
let taxBoolean = calculateTax(100, false) as any as boolean;
console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);
console.log(`Boolean Value: ${taxBoolean}`);