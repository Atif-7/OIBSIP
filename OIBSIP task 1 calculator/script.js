let inputDisplay = document.getElementById('input-display');
let resultDisplay = document.getElementById('result-display');
let buttons = document.querySelectorAll('.button');

let inputString = "";
let resultString = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == 'Enter'){
            try {
                resultString = eval(inputString);
                inputDisplay.textContent = inputString;
                resultDisplay.textContent = resultString;
            } catch (error) {
                resultDisplay.innerHTML = "<p align='center'>SYNTAX ERROR</p>"; 
            } 
        }
        else if(e.target.innerHTML == 'C'){
            inputString = "";
            resultString = "";
            inputDisplay.textContent = inputString;
            resultDisplay.textContent = resultString;
        }
        else if(e.target.innerHTML == 'del'){
            inputString = inputString.substring(0, inputString.length-1);
            inputDisplay.textContent = inputString;
        }
        else{
            inputString += e.target.innerHTML;
            inputDisplay.textContent = inputString;
        }
    });
});