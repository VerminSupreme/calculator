const rowsOfKeys = document.getElementsByClassName('rowOfKeys');
const display = document.getElementById('display');

let origValue = 0;
let origValueFilled = false;
let appliedValue;

//add event listeners to keys
for (let i = 0; i < rowsOfKeys.length; i++){
    for (let j = 0; j < rowsOfKeys[i].children.length; j++){
        rowsOfKeys[i].children[j].addEventListener('click', keyPress);
    }
}



function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

function operate(a, b, operator){
    switch (operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default: return 'Invalid';
    }
}

function keyPress(key){
    const keyValue = key.target.innerHTML;
    switch (keyValue){
        case '+':
        case '-':
        case '*':
        case '/':
            origValueFilled = true;
            applyOperator(keyValue);
        default:
            determineVarToFill(keyValue);
    }
}

function determineVarToFill(keyValue){
    if (origValueFilled == false){
        fillVar(origValue, keyValue);
        
    }else{
        fillVar(appliedValue, keyValue);
    }
}


// problem --> varToFill is being passed in as value, not reference
// probably have to merge determineVarToFill with fillVar
// unless...


function fillVar(varToFill, keyValue){
        if (varToFill === 0){
            varToFill = keyValue;
            console.log(varToFill);
            console.log(origValue);

        }else{
            varToFill += keyValue;
        }
        updateDisplay(varToFill);
    
}

function applyNumber(keyValue){

}

function updateDisplay(displayValue){
    display.innerText = displayValue;
}

