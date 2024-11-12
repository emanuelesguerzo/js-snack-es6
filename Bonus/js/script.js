const array = [12, "pinco", 15, "pallo", "mindfull", 82, 19];
const num1 = 3;
const num2 = 5;

function getSubArray(array, a, b) {
    const resultArray = [];

    for(let i = a; i <= b; i++) {
        resultArray[resultArray.length] = array[i];
    }
    
    return resultArray;
}

console.log(getSubArray(array, num1, num2));

