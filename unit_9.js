// Callback

const bmiCalculate = (weight, height, callback) => {
    callback(weight, height);
}

const bmiFormula = (w, h) => {
    let result = Number(w) / Math.pow(Number(h), 2);
    console.log(`Your BMI is: ${Math.round(result)}`);
    compareBMI(result);
}

const compareBMI = (bmi) => {
    switch(true) {
        case bmi < 0:
            console.log('Your BMI can NOT Valid !!!');
            break;
        case bmi < 18.5:
            console.log('You are Underweight 🦴');
            break;
        case bmi >= 18.5 && bmi <= 22.9:
            console.log('You are Normal 👍');
            break;
        case bmi >= 23 && bmi <= 24.9:
            console.log('You are Overweight 🍔');
            break;
        case bmi >= 25:
            console.log('You are Fat 🫄');
            break;
        default:
            break;
    }
}

bmiCalculate(45, 1.60, bmiFormula);