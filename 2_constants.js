/*
A contant is used to declare a variable final, it means it can not be changed else where in the program once it is declared
to use constat we use keyword "const"
this is uswed to define a fixed values in the program so the user can not manuplate in the flow

*/

let rradious=5
let pii=3.14
let aarea

aarea = pii * rradious*rradious

console.log(aarea)

/* here pi is supposed to be constant, as it is defined as unviversal number and the formula to find the radious is as follws pi*radious^2
    if it is not declared in costant then a user can manuplate and code values can go wrong
    to avoid this things we use key word constant "const"
    this concept follws as once it is declardd as const it can not be redefined 
    redfinig will give error
    if const is used then you can no longer be able to  use let to define the variable
    */
    let radious=5
    const pi=3.14
    let area
    
    area = pi * radious*radious
    
    console.log(area)
    
