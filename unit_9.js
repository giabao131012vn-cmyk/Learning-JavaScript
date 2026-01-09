// Callback

function Calculator(firstNum, secondNum, operationFunc) {
    operationFunc(Number(firstNum), Number(secondNum));
}

function operationFunc(firstNum, secondNum) {
    let mutiplyResult = Number(firstNum) * Number(secondNum);
    console.log(`${firstNum} × ${secondNum} = ${Math.round(mutiplyResult)}`);

    let devideResult = Number(firstNum) / Number(secondNum);
    console.log(`${firstNum} ÷ ${secondNum} = ${Math.round(devideResult)}`);

    let addResult = Number(firstNum) + Number(secondNum);
    console.log(`${firstNum} + ${secondNum} = ${Math.round(addResult)}`);

    let minusResult = Number(firstNum) - Number(secondNum);
    console.log(`${firstNum} - ${secondNum} = ${Math.round(minusResult)}`);
}

Calculator(13, 9, operationFunc);