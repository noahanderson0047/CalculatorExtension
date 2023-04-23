
 const display = document.getElementById("display")
 
 let num1= null
 let num2 = null

 let operator = ""

 let displayFlag = true


let buttons = document.querySelectorAll('button')
buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      displayChange(btn.innerText)
    });
  });


function storeNumber(str){
    if(num1 ==null){
        num1 = Number(str)
    }
    else{
        num2 = Number(str)
    }
}



function displayChange(str){
    if(!displayFlag){
        display.innerText = ''
        displayFlag = true
    }
    console.log(num1)
    console.log(operator)
    console.log(Number(str))
    if(num1 != null && operator !=null && isNaN(str)){
        console.log("success")
        storeNumber(display.textContent)
        num1 = operate(num1,num2,operator)
        display.textContent = num1
        num2 = null
        displayFlag = true
    }
    else if(str == '='){
        if(num1 && operator){
            storeNumber(display.textContent)
            num1 = operate(num1,num2,operator)
            display.textContent = num1
            num2 = null
            operator = ''
            displayFlag = true
        }
    }
    if(str =='/' || str == '*' || str == '+' || str == '='){
        operator=str
        storeNumber(display.textContent)
        displayFlag = false
    }
    else if(str == "Clear"){
        display.textContent= ''
        num1 = null
        num2 = null
        operator = ""
    }
    else{
        if(num1 ==null){
            display.textContent += str
        }
        else{
            display.textContent += str
        }
    }
}
//dwa
function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2
}

function multiply(num1,num2){
    return num1*num2
}

function divide(num1, num2){
    return num1/num2
}



function operate(num1, num2, operator){
    switch(operator){
        case "/":
            return divide(num1,num2)

        case "*":
            return multiply(num1,num2)
        
        case "+":
            return add(num1,num2)
        
        case "-":
            return subtract(num1,num2)

    }
}