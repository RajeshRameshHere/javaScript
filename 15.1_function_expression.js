
// function expressions = a way to define functions as  ==>  values or variables

//  1. Callbacks in asynchronous operations
//  2. Higher-Order Functions
//  3. Closures
//  4. Event Listeners

const hello = function(){                   //This is function 
   console.log("Hello");
}

hello();

setTimeout(function() {                   //This is function expression
    console.log("Goodbye");
}, 3000);


 //                    example-2
//                     ---------
const num=[1,2,3,4,5,6];
const squares=num.map(function(element){
    return Math.pow(element,2)
});



 //                    example-3
//                     ---------


    // function 

const cube=num.map(cubes);          //2<== here i am storing the  function in a variable and refeering the num element 



function cubes(element){            //here i am creating a function which performs a task
    return Math.pow(element,3)      // which returns power of 3  a simple task of math ==>2
    
}

        //function as an expression


//  now to make it as a function exppression cut the whole part of the function and put it in the place of map method 
// now it will work as an function expression

const cube1=num.map(function cubes(element){        
    
    return Math.pow(element,3)     
    
    
}); 


 //                    example-4
//                     ---------

    // function 

const evenNums=num.filter(even)

function even(element){
    if (element%2===0) {
        return even;
    }
}

        //function as an expression

const evenNums1=num.filter(function /*even*/(element){             //since we are passing function as a value we dont need a name 
        if (element%2===0) {
            return even;
        }
    })

 //                    example-4
//                     ---------         



        //function


 const oddNums=num.filter(odd);
 function odd(element){
    return element % 2 !==0;
 }


 
        //function as an expression


 const oddNums1=num.filter(function (element){
    return element % 2 !==0;
 });



 //function as an expression and with arrow function, which shortens the code more



const total=num.reduce((accumulator,element)=>{
    return accumulator+element;
})



console.log(squares);


console.log(cube)                //function
 
console.log(cube1)               //function as expression 

console.log(evenNums);           //function

console.log(evenNums1)           //function as expression 

console.log(oddNums);            //function

console.log(oddNums1);           //function as expression 


 console.log(total);            //function as expression 


