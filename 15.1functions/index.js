

const x=document.getElementById("x")
const y=document.getElementById("y")
const mySubmit=document.getElementById("result")
let result;

mySubmit.onclick=function(){

    act=mySubmit
    if(act=="+"){
        function add(x, y){
            return x + y;
        }
        console.log(add(x,y))
        

    }
}


function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function isEven(number){

    return number % 2 === 0 ? true : false;
}

function isValidEmail(email){

    return email.includes("@") ? true : false;
}
function action (){
    if (onclick==="+") {
        console.log(add(x,y))
        
    }

}