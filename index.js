/* "I would argue that "sloppy programming is subjective and then the app is this small and there is no chane of confusing name conflicts in 1-file app", that global variables are the easiest to understand" */

/*"I have found it is better to optimize for the ease of reading code in the future than trying to adhere to a standard meant for large apps "" */




let resultEL = document.getElementById("result-el")

let num1
let num2

function grabNums() {
    num1 = parseFloat(document.getElementById("num1-el").value)
    num2 = parseFloat(document.getElementById("num2-el").value)
}

function add() {
    grabNums()
    const result = num1 + num2
    resultEL.textContent = `Result ${result}`
}

function subtract() {
    grabNums()
    const result = num1 - num2
    resultEL.textContent = `Result ${result}`
}

function divide() {
    grabNums()
    const result = num1/num2
    resultEL.textContent = `Result ${result}`
}

function multiply() {
    grabNums()
    const result = num1 * num2 
    resultEL.textContent = `Result ${result}`
}


 
 
 /*
 function grabNums() {
    let  num1 = parseFloat(document.getElementById("num1-el").value)
    let  num2 = parseFloat(document.getElementById("num2-el").value)
    return {num1,num2}
 }
 
 function add() {
     const{num1,num2} = grabNums()
     const sum = num1 + num2
     sumEL.textContent = `Result ${sum}`
 }
 */






/*
function add() {
    let num1 = parseFloat(document.getElementById("num1-el").value)
    let num2 = parseFloat(document.getElementById("num2-el").value)
    const sum = num1 + num2
    sumEL.textContent = `Result ${sum}`
}

function subtract() {
    let num1 = parseFloat(document.getElementById("num1-el").value)
    let num2 = parseFloat(document.getElementById("num2-el").value)
    const sum = num1 -num2
    sumEL.textContent = `Result ${sum}`
    
}
 */
 
 
 
 
 
 
 
 
 
 

