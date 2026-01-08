// Functions

const checkEvenOrOdd = (nums) => {
    if(nums % 2 === 0) {
        return nums +' is Even';
    }
    else {
        return nums + ' is Odd';
    }
}

const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < numsArray.length; i++) {
    console.log(checkEvenOrOdd(numsArray[i]));
}