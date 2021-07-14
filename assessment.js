function returnPrettiedString(number) {
    const absoluteNumber = Math.abs(Number(number));
    if (absoluteNumber >= 1.0e+12) {
        return performOperations(absoluteNumber, 1.0e+12) + "T";
    } else if (absoluteNumber >= 1.0e+9) {
        return performOperations(absoluteNumber, 1.0e+9) + "B";
    } else if (absoluteNumber >= 1.0e+6) {
        return performOperations(absoluteNumber , 1.0e+6) + "M"
    } else if (absoluteNumber >= 1.0e+3) {
        return performOperations(absoluteNumber , 1.0e+3) + "K"
    } else {
        return absoluteNumber;
    }
}


function performOperations(number, numberToDivide) {
    const modifiedNumber = number / numberToDivide;
    if(Number.isInteger(modifiedNumber)) {
        return modifiedNumber;
    } else {
        return modifiedNumber.toFixed(1);
    }
}

export { returnPrettiedString , performOperations };
