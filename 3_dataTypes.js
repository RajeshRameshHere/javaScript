/* In JavaScript data types can be devided into two types
        1.primitive data types
        2.object
    1.primitive data type
      * number  =>  max value that can be stored is - 2^1024 - 2^971, or approximately 1.7976931348623157E+308. || max safe value is 9007199254740991
                =>  min value that can be stored is - 9007199254740991 (-9,007,199,254,740,991, or about -9 quadrillion).
        if we need to access a number bigeer then the above values than we have a data type called bigint
        bigint was not there in javascript in early days, later it was introduced

      * string
      * boolean
      * null
      * undefined
      * symbol  
    2.  

*/ 

let data=8          //int
let user="navin"    //String

let num= 234567898765432123456 //=> when u try to reach max the value then the max value it will result in losing the data
                               //=> to make it print or use the value beyond the max value we need to use "n" at the end of the number
                               //=>it represents bigint and lets us store the value till the value u enered wothout losing any data
                               //=> to add number to big it we need to add n to the end of the both nubmers that we are trying to add
                               //=> else it gives you error, example as follows below

console.log(num);

let num1= 234567898765432123456n        //=>bigint

console.log(num1+567n)                  //=> adding bigint (n at the end of both numbers is mandatory)

/*String-

          
        */