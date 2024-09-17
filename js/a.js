const myVariable="hlo";
//length  
 const myVariable1="Mathematics";
 console.log(typeof myVariable1);

console.log(myVariable.length)
//string method
console.log(myVariable.charAt(0));
console.log(myVariable.indexOf('l'));
console.log(myVariable.lastIndexOf('o'));      
console.log(myVariable.slice(0,2));  
console.log(myVariable.toUpperCase());         
console.log(myVariable.toLowerCase()); 
console.log(myVariable1.includes("mat")); // out put this boolen valoue
console.log(myVariable1.split('e')); 

//number
const myNumber =42.002;
const myNumber1 ='42sds';
console.log(myNumber); 
console.log(Number(myNumber1)); 
console.log(Number(true));// true mean 1 value

//number methods

console.log(Number.isInteger(myNumber1));
console.log(Number.parseFloat(myNumber1));//only number not allowed string
console.log(Number.parseInt(myNumber));
console.log(Number.parseInt(myNumber).toFixed(2));//fixed use in round the valu
console.log(myNumber.toString()); 
console.log(parseFloat(myNumber1).toFixed(2).toString()); 
// two types
// Number.isNaN
// isNaN
console.log(Number.isNaN(42)); 
console.log(Number.isNaN('abi')); 
console.log(isNaN(42)); 
//math methods 

console.log(Math.PI); 
console.log(Math.trunc(Math.PI)); 
console.log(Math.ceil(4.8)); //rounds  of number ex 5
console.log(Math.floor(4.8)); // less the number ex 4
console.log(Math.pow(4,8)); 
console.log(Math.min(4,8,3,5,6,7,8)); //  small number 
console.log(Math.max(4,8,3,5,6,7,8));//big number
console.log(Math.random());// any number get 
console.log(Math.floor(Math.random()*10)+1);
console.log('abi'.charAt((Math.floor(Math.random()*3))));

const myName='abiasabi'
console.log(myName.charAt((Math.floor(Math.random()*myName.length))));