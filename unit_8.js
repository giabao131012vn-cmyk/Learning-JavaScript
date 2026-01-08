// Array Methods

const nArr = [1,2,3,4,5,6,7,8,9,10];

// Map -> Double:
const doubleArr = nArr.map((n) => {
    return n*2;
});
console.log(doubleArr);

// Filter -> Even Numbers:
function evenNums(elements) {
    return elements % 2 === 0
}

let evenNumbersOnly = nArr.filter(evenNums);
console.log(evenNumbersOnly);

// Reduce -> Sum Calculate:
const sum = nArr.reduce((t, i) => {
    return t + i;
})
console.log('The sum is: '+ sum);