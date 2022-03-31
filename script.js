const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (e) =>{
        updateScreen(e.target.value);
    });
});

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";
const inputNumber = (number) => {
    if(currentNumber === "0") {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        inputNumber(e.target.value)
        updateScreen(currentNumber);
    });
});

const operator = document.querySelectorAll(".operator");

operator.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        inputOperator(e.target.value);
    });
});

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ""

    if (calculationOperator === "") {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = "0"
}

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
}) 

const calculate = () => {
    let result = ""
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-" :
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        case "%":
            result = parseFloat(prevNumber) % parseFloat(currentNumber)
            break
        default:
            break
        
    }
    currentNumber = result
    calculationOperator = ""
}

const clearAll = () => {
    prevNumber = ""
    calculationOperator = ""
    currentNumber = "0"
}
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (e) => {
    inputDecimal(e.target.value)
    updateScreen(currentNumber)
})