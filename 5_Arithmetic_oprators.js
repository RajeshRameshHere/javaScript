/*
                        oprators
                        -------
    arithmatic oprators
 * + add
 * - subtract
 * / divide
 * * multiply
 * <= lessthan or equal to
 * >= graterethan or equal to
 * i++ => It indicates the post incremaent of the value
 * ++i => It indicates the pre  incremaent of the value
 

This oprater is tricky, when assigning a value to the variable using a pre or post incriment, the  value of it will vary upon the isage of the oprater 
for example /*
*/
let i =23;
let j =32;
++j;
i++;
console.log(i,j) //this line of code prints the increment vlaue, regardless of posr or pre increment of the value;but what is the differnce between both of them

                  // leyts see from the example 

let a=20
let b= 20

c= a+ a++
console.log(c,a) //it prints 40, this brings us confusion,
               //the concept here is.....the value of the a is incrementing after the assignment of the value* therefore it is called post increment
               //gets increment after the assignment
               
c= b+ ++b        //it prints 41, 
console.log(c,b) //the concept here is.....the value of the a is incrementing before the assignment of the value* therefore it is called pre increment
                 //gets increment before assignment






 /*



 */