const rowsOfKeys = document.getElementsByClassName('rowOfKeys');
const display = document.getElementById('display');
const miniNumber = document.getElementById('prevNumber');

let origValue;
let origValueFilled = false;
let operator;
let appliedValue;

//add event listeners to keys
for (let i = 0; i < rowsOfKeys.length; i++){
    for (let j = 0; j < rowsOfKeys[i].children.length; j++){
        rowsOfKeys[i].children[j].addEventListener('click', keyPress);
    }
}

//add event listener to keyboard
document.addEventListener('keydown', (key) => {
    keyboardKeyPressed(key);
})

function keyboardKeyPressed(key){
    if (key.key >= 0 && key.key <= 9){
        keyPress(key.key, true);
    }
    switch (key.key){
        case '+':
            keyPress('+', true);
            break;
        case '/':
            keyPress('÷', true)
            break;
        case '-':
            keyPress('−', true);
            break;
        case '*':
            keyPress('×', true);
            break;
        case '=':
        case 'Enter':
            keyPress('=', true);
            break;
        default:
            break;
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

function operateButton(){
    let answer = operate(origValue, appliedValue, operator);
    updateDisplay(answer);
    origValue = answer;
    appliedValue = undefined;
    operator = undefined;
}

function operate(a, b, operator){
    switch (operator){
        case '+':
            return add(+a, +b);
        case '−':
            return subtract(+a, +b);
        case '×':
            return multiply(+a, +b);
        case '÷':
            return divide(+a, +b);
        default: return 'Invalid';
    }
}

function keyPress(key, fromKeyboard){
    let keyValue;
    if (fromKeyboard) 
        {keyValue = key;}
            else 
        {keyValue = key.target.innerHTML;}

    switch (keyValue){
        case '+':
        case '−': // -
        case '×': // *
        case '÷': // /
            updateDisplay(keyValue);
            console.log(keyValue);
            origValueFilled = true;
            if (operator == undefined) 
                {operator = keyValue;} 
                    else
                {
                    if (appliedValue != undefined){
                        operateButton();
                        operator = keyValue;
                    } 
                }

            if (appliedValue != undefined){appliedValue = undefined;}
            break;
        case '=': 
            if (appliedValue != undefined)
                operateButton();
            break;
        default:
            console.log('default is reached');
            determineVarToFill(keyValue);
    }
}

function contains(stringToTest, containedChar){
    if (stringToTest == undefined)  {return;}
    for (let i = 0; i < stringToTest.length; i++){
        if (stringToTest.charAt(i) == containedChar){
            return true;
        }
    }
    return false;
}

function determineVarToFill(keyValue){
    console.log(keyValue);
    if (origValueFilled == false){
        if (keyValue == '.' && contains(origValue, '.')){
            return;
        }
        if (origValue == undefined){
            origValue = keyValue;
        } else {
            origValue += keyValue;
        }
        updateDisplay(origValue);
    }else{
        if (appliedValue == undefined){
            appliedValue = keyValue;
        } else {
            appliedValue += keyValue;
        }
        updateDisplay(appliedValue);
    }
}




function applyNumber(keyValue){

}

function updateDisplay(displayValue){
    if (displayValue === NaN){
        displayValue = '0';
    }
    if (displayValue == Infinity){
        displayValue = 'ʎʇᴉuᴉɟuI';
    }
    console.log(displayValue);
    display.innerText = displayValue;
}

