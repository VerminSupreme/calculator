const rows = document.getElementsByClassName('rowOfKeys');


for (let i = 0; i < rows.length; i++){
    for (let j = 0; j < rows[i].children.length; j++){
        rows[i].children[j].addEventListener('click', keyPress);
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
    console.log(keyValue);
}