let firstNumber="";
let SecondNumber="";
let operator="";

function appendNumber(num)
{
if(operator==""){
    firstNumber+=num;
    document.getElementById("result").value=firstNumber;
}
else{
    SecondNumber+=num;
    document.getElementById("result").value=firstNumber+operator+SecondNumber;
}
}
function setOperator(op)
{
    operator=op;
    document.getElementById("result").value=firstNumber+""+operator;
}


function calculate()
{
    let result;
    switch(operator){
        case '+':
            result=parseInt(firstNumber)+parseInt(SecondNumber);
            break;
            case '-':
            result=parseInt(firstNumber)-parseInt(SecondNumber);
            break;

            case '*':
            result=parseInt(firstNumber)*parseInt(SecondNumber);
            break;

            case '/':
            result=parseInt(firstNumber)/parseInt(SecondNumber);
            break;


    }
    document.getElementById("result").value=result;
}
function clearresult(){
firstNumber="";
 SecondNumber="";
 operator="";
 document.getElementById("result").value="";
}

