// Array

const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let a = 0; a < numsArray.length; a++) {
    if(numsArray[a] % 2 === 0) {
        console.log(numsArray[a] +' is Even');
    }
    else {
        console.log(numsArray[a] +' is Odd');
    }
}