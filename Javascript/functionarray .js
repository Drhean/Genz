const arr = [1, 2 , 3, 4, 5];
console.log(arr);
// uning map to create new array with each element 
const newArr = arr.map(val => val + 2);
console.log(newArr);
//using reduce to sum all the the elements in the Array 
const TotalValue = arr.reduce((num1, num2) => {
    return num1 + num2;
    
})
console.log(TotalValue);
//using filter to see even numbers in array 
const evenNumbers = arr.filter(val => val % 2 === 0 );
console.log(evenNumbers);
const oddNumbers = arr.filter(val => val % 2 !== 0);
console.log(oddNumbers);