// 1. variable let and const
const hubby = 'omg';
let phone = 'iphone 15';
phone = 'samsung galaxy s17'; 

// 2. Default parameter
// 5.spread operator or Three dots(...)
function maxNumber(array=[]){
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

// 3. template string
const myNotes = `I am mojnu of ${hubby}. I have a ${phone}.`
// console.log(myNotes);

// 4. arrow function
const square = x => x*x;
console.log(square(8));