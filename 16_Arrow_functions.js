
//this is an example of how to decleare 

let drax=function(a,b){
    if (a>=0 || b>=0) {  return a+b;
    }
    else{
    return "please enter a positive value";
    }
}
console.log(drax(-2,3));



let drax1=function(a,b){
    if (a>=0 && b>=0) {  return a+b;
    }
    else{
    return "please enter a positive value";
    }
}
console.log(drax1(-2,3));




let input1 = Math.abs(5);
let input2 = Math.abs(-7);

let sum = (num1,num2) => num1 + num2;
let result = sum(input1,input2);
console.log(result);





//above there is a lot of code for your compailer
// simplify the function expressin js has arrow function

let groot=(user,age)=>  {

    console.log("this is groot")

    console.log(`hi my name is ${user} and my age is ${age}` );
}
groot("i am groot","i am groot")


//when there is only one statment to define then there is no need of return and curly braces needed in the function 
// we can define it in one line
//ex:-

let rocket=(a,b)=>  a+b;    //it is simplified and short


console.log(rocket(2,3));