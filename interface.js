const pie = document.querySelector('.pie');
const clear_below = document.querySelector('.clear-below');
const clear_all = document.querySelector('.clear-all');
const backspace = document.querySelector('.backspace');

const reciprocal = document.querySelector('.reciprocal');
const square = document.querySelector('.square');
const under_root_square = document.querySelector('.under-root-square');
const divide = document.querySelector('.divide');


const multiply = document.querySelector('.multiply');

const subtract = document.querySelector('.subtract');

const add = document.querySelector('.add');

const add_subtract = document.querySelector('.add-subtract');
const zero = document.querySelector('.zero');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equal');

const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');

const after_equal = document.querySelector('.after-equal');
const before_equal = document.querySelector('.before-equal');

let num1 = null;
let num2 = null;
let operator_value = null;
let waitingForNum2 = false;
let justComputed = false;
let result;

// Function to display clicked numbers

function showDigits() {
    number.forEach((num) => {
        num.addEventListener('click', () => {
            if (after_equal.textContent == '0' || waitingForNum2 || justComputed) {
                after_equal.textContent = '';
                waitingForNum2 = false;
                justComputed = false;
            }
            
            after_equal.textContent += num.textContent;
            console.log("Current after_equal.textContent:", after_equal.textContent);
        });
    });
}

showDigits();

// Function to handle operator clicks

function arithmeticOperations() {
    operator.forEach((key) => {
        key.addEventListener('click', () => {

            if(key.textContent === '='){
                return;
            }

            if (after_equal.textContent === '') {
                console.log("No number entered after operator!");
                return;
            }

            if (num1 === null || justComputed) {
                num1 = parseFloat(after_equal.textContent);
                console.log("Num1 :", num1);
            } else if (operator_value !== null && !waitingForNum2) {
                num2 = parseFloat(after_equal.textContent);
                console.log("Num2 before switching operators:", num2);
                computeResult();
            }

            operator_value = key.textContent;
            console.log("Operator selected:", operator_value);
            
            before_equal.textContent = `${num1} ${operator_value} `;
            
            after_equal.textContent = ''; 
            waitingForNum2 = true;
        });
    });
}

arithmeticOperations();

// Get num2 when "=" is clicked
equal.addEventListener('click', () => {
    if (!operator_value) {
        console.log("No operator selected yet!");
        return;
    }

    if (after_equal.textContent === '') {
        console.log("No second number entered!");
        return;
    }

    num2 = parseFloat(after_equal.textContent);
    console.log("Num2 captured:", num2);

    computeResult();
    justComputed = true;
});

// Function to display result!
function computeResult() {
    switch (operator_value) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '×': 
            result = num1 * num2;
            break;
        case '÷':
            result = num2 !== 0 ? num1 / num2 : 'Stop the cap';
            break;
        default:
            result = 'Error';
            break;
    }

    console.log("Result:", result);


    before_equal.textContent = `${num1} ${operator_value} ${num2} =`; 
    after_equal.textContent = result;

    num1 = result;
    num2 = null;
    operator_value = null
    waitingForNum2 = false;
}

function dealSpecialFunctions(){

    // pie button
    pie.addEventListener('click', () => {
        after_equal.textContent = 3.14;
    })

    // reciprocal button

    reciprocal.addEventListener('click', () => {
        after_equal.textContent = (1 / after_equal.textContent);
    })

    // square button

    square.addEventListener('click', () => {
        after_equal.textContent = after_equal.textContent ** 2;
    })

    // under root square button

    under_root_square.addEventListener('click', () => {
        after_equal.textContent = Math.sqrt(after_equal.textContent);
    })

    // Clear after_equal 

    clear_below.addEventListener('click', () => {
        after_equal.textContent = 0;
    })

    // +/- button

    add_subtract.addEventListener('click', () => {
        newArr = after_equal.textContent.split('');
        if(newArr.includes('-')){
            newArr.splice(0, 1);
            modifiedText = newArr.join('');

            after_equal.textContent = modifiedText;
        }
        else{
            newArr.splice(0,0, '-');
            modifiedText = newArr.join('');

            after_equal.textContent = modifiedText;
        }
        
    })

    // Clear after_equal and before_equal

    clear_all.addEventListener('click', () => {
        after_equal.textContent = 0;
        before_equal.textContent = '';
        num1 = null;
        num2 = null;
        result = 0;
    })

    // backspace button

    backspace.addEventListener('click', () => {
        if(after_equal.textContent == '0'){
            return;
        }
        else{
            let myArr = after_equal.textContent.split('');
            myArr.splice(myArr.length - 1, 1);
            newText = myArr.join('');

            after_equal.textContent = newText;

            if(newText === ''){
                after_equal.textContent = '0';
            }

        }
    })

    // dot button

    decimal.addEventListener('click', () => {
        if(!after_equal.textContent.includes('.')){
            after_equal.textContent += ".";
        }
    })
}

dealSpecialFunctions();


function handleKeyboardKeys(event){
    let keyId = event.keyCode;

    switch(keyId){
        // zero
        case 48:
            if(after_equal.textContent == "0"){
                after_equal.textContent = "";
            }
            after_equal.textContent += "0"
            break;
        // one
        case 49:
            if(after_equal.textContent == "0"){
                after_equal.textContent = "";
            }
            after_equal.textContent += "1"
            break;

        // two
        case 50:
            if(after_equal.textContent == "0"){
                after_equal.textContent = "";
            }
            after_equal.textContent += "2"
            break;

        // three
        case 51:
            if(after_equal.textContent == "0"){
                after_equal.textContent = "";
            }
            after_equal.textContent += "3"
            break;
        
        // four    
        case 52:
            if(after_equal.textContent == "0"){
                after_equal.textContent = "";
            }
            after_equal.textContent += "4"
            break;
        
        // five
        case 53:
            if(after_equal.textContent == "0"){
                after_equal.textContent = "";
            }
            after_equal.textContent += "5"
            break;
        
        // six
        case 54:
            if(after_equal.textContent == "0"){
                after_equal.textContent = "";
            }
            after_equal.textContent += "6"
            break;
        
        // seven
        case 55:
            if(after_equal.textContent == "0"){
                after_equal.textContent = "";
            }
            after_equal.textContent += "7"
            break;
        
        // eight
        case 56:
            if(after_equal.textContent == "0"){
                after_equal.textContent = "";
            }
            after_equal.textContent += "8"
            break;
        
        // nine
        case 57:
            if(after_equal.textContent == "0"){
                after_equal.textContent = "";
            }
            after_equal.textContent += "9"
            break; 
        
        // decimal
        case 190:
            if(!after_equal.textContent.includes('.')){
                after_equal.textContent += ".";
            }
            break;

        // backspace
        case 8:
            if(after_equal.textContent == '0'){
                return;
            }
            else{
                let myArr = after_equal.textContent.split('');
                myArr.splice(myArr.length - 1, 1);
                newText = myArr.join('');
    
                after_equal.textContent = newText;
    
                if(newText === ''){
                    after_equal.textContent = '0';
                }
            }
            break;

        // "p" for pie button
        case 80:
            after_equal.textContent = 3.14;
            break;
        
        // "s" for square button
        case 83:
            after_equal.textContent = after_equal.textContent ** 2;
            break;
        
        // "u" for under root button
        case 85:
            after_equal.textContent = Math.sqrt(after_equal.textContent);
            break;

        // "r" for CE button
        case 82:
            after_equal.textContent = 0;
            break;
        
        // "c" for C button    
        case 67:
            after_equal.textContent = 0;
            before_equal.textContent = '';
            num1 = null;
            num2 = null;
            result = 0;
            break;

    }
}

document.addEventListener('keydown', handleKeyboardKeys)

