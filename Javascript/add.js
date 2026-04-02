const arr = [1, 2 , 3, 4, 5];
console.log(arr);

const newArr = arr.map(val => val + 2);
console.log(newArr);

const TotalValue = arr.reduce((num1, num2) => {
    return num1 + num2;
});
console.log(TotalValue);

const evenNumbers = arr.filter(val => val % 2 === 0 );
console.log(evenNumbers);

const oddNumbers = arr.filter(val => val % 2 !== 0);
console.log(oddNumbers);