//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator


let num =23;
let num2 ="23";

if (num==num2) {                                                //== comparison operator (compare if values are equal)
    console.log("condition satitishfies case1")
    
} else {                                                        // returns condition satitishfies case1

    console.log("condition not satitishfies case1 ")

    
}
//the above oprater "==" is comapring only the values even thoug the data type is diiferent its givng the condition true, which is what we are expecting
// this condition is used to compare only the valus of the variable not the type, use it with your program comaptibility



if (num===num2) {                                               // === strict equality operator (compare if values & datatype are equal)

    console.log("condition satitishfies case2 ")
    
} else {                                                        // returns condition satitishfies case2
    console.log("condition not satitishfies case2 ")

    
}
//the above oprater "===" is comapring datatype & the values, its givng the condition not true cause the the value is same but the data type is not, which is what we are expecting
// this condition is used to comparethe values  & the type of the variable , use it with your program comaptibility